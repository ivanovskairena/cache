defmodule Cache.WorkerVisor do
  @moduledoc false

  use Supervisor, restart: :transient

  @spec start_link(map) :: :ignore | {:error, any} | {:ok, pid}

  def start_link(config) do
    Supervisor.start_link(__MODULE__, config)
  end

  @impl true
  def init(config) do

    children = [
      {Cache.Worker, %{config | supervisor_pid: self()}}
    ]

    Supervisor.init(children, strategy: :one_for_one)
  end
end
