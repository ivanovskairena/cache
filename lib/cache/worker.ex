defmodule Cache.Worker do
  @moduledoc false

  use GenServer, restart: :transient

  require Logger

  alias Cache.Store

  # @key 1
  @fun 2
  @value 3
  @timestamp 4
  @status 5

  @spec start_link(map) :: :ignore | {:error, any} | {:ok, pid}
  def start_link(config) do
    GenServer.start_link(__MODULE__, config, name: worker_name(config.key))
  end

  @impl true
  def init(config) do
    Process.flag(:trap_exit, true)
    {:ok, config, {:continue, :setup}}
  end

  @impl true
  def handle_continue(:setup, config) do
    Logger.info("Worker for key #{inspect(config.key)}: Checking for compute...")
    timestamp = :ets.lookup_element(Store.table(), config.key, @timestamp)

    {:noreply, %{config | ttl_stamp: timestamp, refresh_stamp: timestamp}, {:continue, :timer}}
  end

  def handle_continue(:timer, config) do
    Logger.info("Worker for key #{inspect(config.key)}, is now in TIMER state \n")
    Process.send_after(self(), :compute, Store.get_refresh_interval())

    {:noreply, config}
  end


  @impl true
  def handle_info(:compute, config) do
    Logger.info("Worke for key #{inspect(config.key)}is computing \n")
    ref_interval = Store.get_refresh_interval()

    with true <- parity?(ref_interval, config.counter, config),
         {true, _timestamp} <- ttl_expired?(config),
         true <- :ets.delete(Store.table(), config.key) do
          Logger.info("Worker for key #{inspect(config.key)}: Time to go, sending termination message to manager... \n")

          send(Cache.Manager, {:terminate, config.supervisor_pid})

      {:stop, :normal, config}
    else
      false ->
        Logger.info("Worker for key #{inspect(config.key)}: Parity false, proceeding to compute...\n")
        {_status, timestamp} = compute_function(config)

        {
          :noreply,
          %{config | refresh_stamp: timestamp, counter: config.counter + 1},
          {:continue, :timer}
        }

      {false, _timestamp} ->
        Logger.info("Worker for key #{inspect(config.key)}: TTL false, proceeding to compute..\n.")
        {_status, timestamp} = compute_function(config)

        {
          :noreply,
          %{config | ttl_stamp: timestamp, refresh_stamp: timestamp, counter: 0},
          {:continue, :timer}
        }
    end
  end


  @impl true
  def terminate(reason, config) do
    case reason do
      :normal ->
        Logger.warning("Worker for key #{config.key} has been terminated. Reason: TTL has expired. Status: #{inspect(reason)}\n")

      :shutdown ->
        Logger.warning("Worker for key #{config.key} has been terminated. Reason: #{inspect(reason)}\n")

      _ ->
        Logger.warning("Worker for key #{config.key} has been terminated. Reason: #{inspect(reason)}\n")
    end

   send(Cache.Manager, {:terminate, config.supervisor_pid})
  end


  defp parity?(refresh_interval, refresh_count, config) do
    steps =
      if refresh_count === 0,
        do: refresh_interval,
        else: refresh_interval * refresh_count

    if steps >= config.ttl, do: true, else: false
  end


  defp ttl_expired?(config) do
    timestamp = :ets.lookup_element(Store.table(), config.key, @timestamp)

    if timestamp == config.ttl_stamp,
      do: {true, timestamp},
      else: {false, timestamp}
  end


  defp compute_function(config) do
    status =
      config
      |> refresh_timestamp_equal?()
      |> compute_function(config)

    {status, :ets.lookup_element(Store.table(), config.key, @timestamp)}
  end

  defp compute_function(true, _config) do
    :noop
  end

  defp compute_function(false, config) do
    function_0_arity = :ets.lookup_element(Store.table(), config.key, @fun)

    case function_0_arity.() do
      {:ok, value} ->
        :ets.update_element(Store.table(), config.key, [{@value, value}, {@status, :ready}])
        :ok

      {:error, _reason} ->
        :error
    end
  end


  defp refresh_timestamp_equal?(config) do
    timestamp = :ets.lookup_element(Store.table(), config.key, @timestamp)

    timestamp === config.refresh_stamp
  end


  defp worker_name(key) do
    {:via, Registry, {Cache.WorkerRegistry, to_string(key) <> "-worker", :fun_0_arity_processor}}
  end
end
