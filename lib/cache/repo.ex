defmodule Cache.Repo do
  use Ecto.Repo,
    otp_app: :cache,
    adapter: Ecto.Adapters.Postgres
end
