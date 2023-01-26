defmodule Cache.Manager do
  @moduledoc false


  use GenServer

  require Logger

  alias Cache.{Store, Weather}
  @fun 2
  @timestamp 4

  defstruct caller: nil,
            key: nil,
            supervisor_pid: nil,
            ttl: nil,
            counter: 0,
            interval: 4,
            ttl_stamp: {},
            refresh_stamp: {}

  @spec start_link(any) :: :ignore | {:error, any} | {:ok, pid}

  def start_link(_) do
    GenServer.start_link(__MODULE__, %__MODULE__{}, name: __MODULE__)
  end

  @impl true
  def init(config), do: {:ok, config, {:continue, :setup}}

  @impl true
  def handle_continue(:setup, config) do
    :ok = Store.set_refresh_interval(config.interval)
    :ok = Store.ets()

    {:noreply, config}
  end

  @impl true
  def handle_call({:store, {key, value, ttl}}, from, config) do
    value
    |> Weather.generate_0_arity_fun()
    |> update_or_create_async(key, ttl, from)

    {:noreply, %{config | key: key, caller: from}}
  end

  # Cleanly shutdown a worker process when it's TTL expires.
  def handle_info({:terminate, work_visor_pid}, config) do
    terminate_worker_async(work_visor_pid)

    {:noreply, config}
  end

  # Collect result If the :store task succeeds in updating or creating a new ETS object.
  @impl true
  def handle_info({ref, result}, config) do
    # Stop the monitoring the completed task and clear the DOWN message.
    Process.demonitor(ref, [:flush])

    case result do
      {:updated, key, from} ->
        GenServer.reply(from, :ok)
        Logger.info("Updated key : #{key}\n")

      {:new, key, ttl, from} ->
        GenServer.reply(from, :ok)
        Logger.info("New key : #{key}\n")

        DynamicSupervisor.start_child(Cache.MasterVisor, {
          Cache.WorkerVisor,
          %{config | key: key, ttl: ttl}
        })
    end

    {:noreply, config}
  end

   def handle_info({:DOWN, _ref, _proc, _pid2, reason}, config) do
    GenServer.reply(config.caller, {:error, reason})

    {:noreply, config}
  end

  ## Helpers

  defp update_or_create_async(fun, key, ttl, caller) do
    Task.Supervisor.async_nolink(
      Cache.TaskSupervisor,
      fn ->
        update_fun =
          :ets.update_element(Store.table(), key, [
            {@fun, fun},
            {@timestamp, :erlang.timestamp()}
          ])

        case update_fun do
          true ->
            {:updated, key, caller}

          false ->
            :ets.insert(
              Store.table(),
              {key, fun, nil, :erlang.timestamp(), :busy}
            )

            {:new, key, ttl, caller}
        end
      end
    )
  end

  defp terminate_worker_async(sup_pid) do
    Task.Supervisor.start_child(
      Cache.TaskSupervisor,
      fn ->
        # :ets.delete(Store.table(), key)
        DynamicSupervisor.stop(sup_pid, :normal)
      end
    )
  end

   @spec worker_pid(any) :: pid
  def worker_pid(key) do
    [{pid, _value}] = Registry.lookup(Cache.WorkerRegistry, to_string(key) <> "-worker")
    pid
  end
end
