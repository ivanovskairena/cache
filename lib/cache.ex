defmodule Cache do
  @moduledoc """
  The `Cache` module is an implementation of a periodic self-rehydrating TTL cache
  that handles expensive data processing ahead of time for fast access.
  The cache generates 0-arity functions that store inbound data and each function
   is registered under a unique key along with a TTL (time to live).

  Child processes are assigned to compute the functions at set intervals and store the results.
  The cache is expected to provide the most recently computed value whenever the get/1 function is called.
  This cache is optimized for concurrent read/write, and child processes are linked to a chain of supervisors
  to ensure stability with data-processing workers that are resilient to runtime exceptions.
  This cache is useful for input data that is high-frequency and fast-changing, and data that requires expensive processing.

  ## Feature
  - Critical tasks are executed concurrently ensuring quality performance
    without race conditions.
  - Child processes are free from their parent. Instead, they are linked to a
    chain of supervisors to the main application-- ensuring application-wide
    stability with data-processing workers resilient to runtime exceptions.
  - Storage is optimized for concurrent read/write.

  ## Use Case
  - Input data is high-frequency fast-changing queries.
  - Data requires processing that is expensive to compute,
    therefore, data processing must start and be completed
    before it is needed, not when it is being requested for.
  - Data is not frequently accessed, but fast access is guaranteed when needed.

  ## Test-Run Utility
  See `Cache.Weather`

  """

  alias Cache.{Manager, Store}

  @value 3
  @status 5

  @type get_returns ::
          {:busy, String.t()}
          | {:error, String.t()}
          | {:ok, any}

  @spec store(atom | number | binary, any, number) :: :ok | {:error, any}
  @doc """
    Add new or update existing `value` with its `ttl` in the cache under `key`.

    `ttl` value is expected to be greater than the
    `refresh_interval` (see `Cache.Manager` configuration).
    It is recommended that `ttl` value is divisible by the `refresh_interval`.
    if `ttl` is not given, it defaults to `36_000` seconds(1 hour).

    `ttl` should be specified in seconds, either in `integer` or `decimal`.
    The provided value will convert to milliseconds internally.

    ```elixir
    Cache.store("KRP", %{}, 10)
    # internal conversion
    #=> Store.sec_to_ms(10) == 10_000
    #=> true

    Cache.store("KRP", %{}, 10.50)
    # internal conversion
    #=> Store.sec_to_ms(10.50) == 10_500
    #=> true

    # when ttl is not specified...
    Cache.store("KRP", %{})
    # internal conversion
    #=> Store.sec_to_ms(3_600)
    #=> 3_600_000

    ```
  """

  def store(key, value, ttl \\ 3_600) when is_number(ttl) and ttl > 0 do
    refresh = Store.get_refresh_interval()
    ttl_sec = Store.sec_to_ms(ttl)

    case {refresh, ttl_sec} do
      {refresh, ttl_sec} when refresh >= ttl_sec ->
        {:error, "TTL should be greater than refresh_interval: #{refresh}ms \n"}

      _ ->
        GenServer.call(Manager, {:store, {key, value, ttl_sec}})
    end
  end

  @spec get(atom | number | binary) :: get_returns()
  @doc """
  `get/1`
  Retrieve the value for a specified key from the cache.

  If `key` exists in the cache and initial data associated with
  `key` is available, `{:ok, data}` is returned. If data-prccessing
  is in progress on first-run hence the data associated with `key`
  has not been stored, then `{:busy, reason}` is returned.
  If `key` is not present in the cache, `{:error, reason}` is returned.

  Note: Client application calling `Cache.get(key)` should be
  responsible for implementing a polling function with a timeout
  mechanism. While this may be rarely needed, it should be
  available in cases where the requested data does not yet exist
  in the cache on initial run.
  """
  def get(key) do
    case :ets.member(Store.table(), key) do
      true ->
        case :ets.lookup_element(Store.table(), key, @status) do
          :busy -> {:busy, "Data is not ready yet \n"}
          _ ->
            {:ok, :ets.lookup_element(Store.table(), key, @value)}
        end
        false -> {:error, "Data with the given key #{key} is not yet available \n"}
    end
  end
end
