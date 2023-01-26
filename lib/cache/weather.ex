defmodule Cache.Weather do
  @moduledoc false

  require Logger

  alias __MODULE__

  data = fn ->
    %{
      "temp" => (-24..100 |> Enum.random()) + Enum.random(101..900) / 100,
      "pressure" => Enum.random(100..10_000),
      "humidity" => Enum.random(1..400),
      "visibility" => Enum.random(1000..10_000),
      "date" => DateTime.now!("Etc/UTC")
    }
  end

  defstruct weather: [
      %{"id" => "SKP", "city" => "Skopje", "main" => data.()},
      %{"id" => "BIT", "city" => "Bitola", "main" => data.()},
      %{"id" => "KUM", "city" => "Kumanovo", "main" => data.()},
      %{"id" => "PRI", "city" => "Prilep", "main" => data.()},
      %{"id" => "STP", "city" => "Stip", "main" => data.()},
      %{"id" => "TET", "city" => "Tetovo", "main" => data.()},
      %{"id" => "VEL", "city" => "Veles", "main" => data.()},
      %{"id" => "OHR", "city" => "Ohrid", "main" => data.()},
      %{"id" => "STR", "city" => "Struga", "main" => data.()},
      %{"id" => "GJP", "city" => "Gjorce Petrov", "main" => data.()},
      %{"id" => "KAR", "city" => "Karpos", "main" => data.()},
      %{"id" => "CEN", "city" => "Centar", "main" => data.()},
      %{"id" => "GOR", "city" => "Gostivar", "main" => data.()},
      %{"id" => "KAV", "city" => "Kavadarci", "main" => data.()},
      %{"id" => "KOC", "city" => "Kocani", "main" => data.()},
      %{"id" => "KRI", "city" => "Krivogastani", "main" => data.()},
      %{"id" => "KRP", "city" => "Kriva Palanka", "main" => data.()},
      %{"id" => "NEG", "city" => "Negotino", "main" => data.()},
      %{"id" => "NOV", "city" => "Novaci", "main" => data.()},
      %{"id" => "PRO", "city" => "Probistip", "main" => data.()},
      %{"id" => "RAD", "city" => "Radovis", "main" => data.()},
      %{"id" => "VAL", "city" => "Valandovo", "main" => data.()},
      %{"id" => "VRA", "city" => "Vraneštica", "main" => data.()},
      %{"id" => "VRP", "city" => "Vrapciste", "main" => data.()},
      %{"id" => "ZEL", "city" => "Zelenikovo", "main" => data.()},
      %{"id" => "ZLN", "city" => "Zelino", "main" => data.()},
      %{"id" => "BER", "city" => "Berovo", "main" => data.()},
      %{"id" => "BOG", "city" => "Bogdanci", "main" => data.()},
      %{"id" => "BOS", "city" => "Bosilovo", "main" => data.()},
      %{"id" => "DEL", "city" => "Delcevo", "main" => data.()},
      %{"id" => "MKB", "city" => "Makedonski Brod", "main" => data.()},
      %{"id" => "MKM", "city" => "Makedonska Kamenica", "main" => data.()},
      %{"id" => "KRU", "city" => "Krusevo", "main" => data.()},
      %{"id" => "DKP", "city" => "Demir Kapija", "main" => data.()},
    ]



  @spec loop_store() :: no_return

  def loop_store() do
    Process.sleep(1000)

    wmap = %Weather{}

    map =
      0..(Enum.count(wmap.weather) - 1)
      |> Enum.random()
      |> then(fn index -> Enum.at(wmap.weather, index) end)

    Cache.store(Map.get(map, "id"), map, rand_ttl())

    loop_store()
  end

  @spec single_loop_store() :: no_return

  def single_loop_store() do
    Process.sleep(1000)

    case Cache.store(
           "KRP",
           %{
             "id" => "KRP",
             "city" => "Kriva Palanka",
             "main" => %{
               "temp" => (-24..100 |> Enum.random()) + Enum.random(101..900) / 100,
               "pressure" => Enum.random(100..10_000),
               "humidity" => Enum.random(1..400),
               "visibility" => Enum.random(1000..10_000)
             }
           },
           rand_ttl()
         ) do
      {:error, reason} ->
        Logger.warning("Problem caching data. Reason: #{reason}\n")

      _ ->
        :ok
    end

    single_loop_store()
  end

  @spec loop_get() :: no_return

  def loop_get() do
    Process.sleep(6_000)
    wmap = %Weather{}

    map =
      0..(Enum.count(wmap.weather) - 1)
      |> Enum.random()
      |> then(fn index -> Enum.at(wmap.weather, index) end)

    IO.puts("Data retrieval: #{inspect(Cache.get(Map.get(map, "id")))}\n")

    loop_get()
  end

  @spec loop_get_single :: no_return

  def loop_get_single() do
    Process.sleep(6_000)

    IO.puts("Data retrieval: #{inspect(Cache.get("KRP"))}\n")

    loop_get_single()
  end

  defp rand_ttl, do: Enum.random(30..60)

  @spec generate_0_arity_fun(any) :: (() -> {:error, binary} | {:ok, any})

  def generate_0_arity_fun(value) do
    fn ->
      2_000..4_000 |> Enum.random() |> Process.sleep()

      case Enum.random(0..4) do
        4 ->
          {:ok, value}

        3 ->
          {:ok, value}

        2 ->
          {:ok, value}

        1 ->
          {:error, "error computing value"}

        0 ->
          raise("rasing an exception")
      end
    end
  end
end
