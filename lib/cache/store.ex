defmodule Cache.Store do
  @moduledoc false

  @spec set_refresh_interval(non_neg_integer()) :: :ok

  def set_refresh_interval(interval_sec) when is_number(interval_sec) do
    {__MODULE__, :refresh_global}
    |> :persistent_term.put(sec_to_ms(interval_sec))
  end

  @spec get_refresh_interval :: non_neg_integer

  def get_refresh_interval() do
    {__MODULE__, :refresh_global}
    |> :persistent_term.get()
  end

  @spec ets :: :ok


  def ets() do
    tid =
      :ets.new(__MODULE__, [
        :set,
        :public,
        write_concurrency: true,
        read_concurrency: true
      ])

    :persistent_term.put({__MODULE__, :ets_global}, tid)
  end

  @spec table :: any

  def table() do
    :persistent_term.get({__MODULE__, :ets_global})
  end

  @spec sec_to_ms(number) :: integer

  def sec_to_ms(seconds) do
    trunc(seconds * 1000)
  end
end
