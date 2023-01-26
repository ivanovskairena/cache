defmodule Cache.ManagerTest do


  use ExUnit.Case, async: true

  alias Cache.Manager

  setup %{} do
    pid =
      case start_supervised(Manager) do
        {:ok, pid} -> pid
        {:error, {:already_started, pid}} -> pid
      end

    [pid: pid]
  end
end
