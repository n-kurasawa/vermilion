defmodule Api.Router do
  use Api.Web, :router

  socket "/ws", Api do
    channel "scores:*", ScoreChannel
  end

  # pipeline :browser do
  #   plug :accepts, ["html"]
  #   plug :fetch_session
  #   plug :fetch_flash
  #   plug :protect_from_forgery
  # end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # scope "/", Api do
  #   pipe_through :browser # Use the default browser stack
  #
  #   get "/", PageController, :index
  # end

  scope "/api", Api do
    pipe_through :api
    resources "/scores", ScoreController
  end
end
