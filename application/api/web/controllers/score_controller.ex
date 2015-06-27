defmodule Api.ScoreController do
  use Api.Web, :controller

  plug :action

  def index(conn, _params) do
    render conn, scores: %{id: 70, id2: 60 }
  end

  def create(conn, _params) do
    render conn, score: 60 
  end

end
