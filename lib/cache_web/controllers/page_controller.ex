defmodule CacheWeb.PageController do
  use CacheWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
  def weather(conn, _params) do
    render(conn, "weather.html")
  end
  def worker(conn, _params) do
    render(conn, "worker.html")
  end
  def worker_visor(conn, _params) do
    render(conn, "worker_visor.html")
  end
  def manager(conn, _params) do
    render(conn, "manager.html")
  end
  def store(conn, _params) do
    render(conn, "store.html")
  end
end
