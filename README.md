# Cache

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

 
Cache is an implementation of a periodic self-rehydrating TTL cache that resiliently handles expensive data-processing ahead of time for fast access.

The cache mechanism generates 0-arity functions that embed inbound data from store/3. Each function is registered under a unique key along with a TTL("time to live"). Child processes are assigned to compute the functions at set intervals and store the results. The cache is expected to provide the most recently computed value whenever get/1 is called.

# Feature

Critical tasks are executed concurrently ensuring quality performance without race conditions.
Child processes are free from their parent. Instead, they are linked to a chain of supervisors to the main application-- ensuring application-wide stability with data-processing workers resilient to runtime exceptions.

Storage is optimized for concurrent read/write.

## Use Case

Input data is high-frequency fast-changing queries.
Data requires processing that is expensive to compute, therefore, data processing must start and be completed before it is needed, not when it is being requested for.
Data is not frequently accessed, but fast access is guaranteed when needed.
Test-Run Utility
See Cache.Weather


## Functions

get(key)

get/1 Retrieve the value for a specified key from the cache.

store(key, value, ttl \\ 3600)

Add new or update existing value with its ttl in the cache under key.

## Testing 

# Cache.Weather
Cache.Weather provides utility functions that are available for emulating the cache operation as part of the test coverage.

# Example
We are going to use two terminals. Run the following lines in the cache project directory:

## First Terminal
input: /cache$ iex --sname server@localhost -S mix

output: Erlang/OTP...

## Second Terminal
input: /cache$ iex --sname client@localhost -S mix

output: Erlang/OTP...

## Second Terminal: connect to :server@localhost
input: iex(client@localhost)2> Node.connect(:server@localhost)

output: true

## First Terminal
iex(server@localhost)1> Cache.Weather.loop_store()

## Second Terminal
iex(client@localhost)2> Node.spawn(:server@localhost, Cache.Weather, :loop_get, [])
