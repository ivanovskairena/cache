defmodule Cache.StoreTest do


  use ExUnit.Case

  doctest Cache.Store

  alias Cache.Store

  setup %{} do
    interval = 10
    :ok = Store.set_refresh_interval(interval)
    refresh = Store.get_refresh_interval()

    :ok = Store.ets()
    table = Store.table()

    [refresh: refresh, table: table]
  end


  test "check persistent term. get refresh_interval value.", %{refresh: refresh} do

    assert is_integer(refresh) == true


    refute refresh == 10
    assert refresh == 10_000
  end

  test "ETS table", %{table: table} do
    assert is_reference(table) == true
    assert :ets.lookup(table, "KRP") |> is_list() == true
  end



  test "seconds to milliseconds" do
    assert 1 |> Store.sec_to_ms() == 1_000


    assert 1.5 |> Store.sec_to_ms() == 1_500


    assert 0.05 |> Storage.sec_to_ms() == 50

     assert 0.00015 |> Store.sec_to_ms() == 0
  end
end
