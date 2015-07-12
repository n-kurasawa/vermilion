defmodule Api.ScoreChannel do
  use Phoenix.Channel
  require Logger

  def join("scores:join", auth_msg, socket) do
    file = File.read! "scores.json"
    scores = String.split(file, ",")
    {:ok, %{messages: "joined", scores: scores}, socket}
  end

  def handle_in("new_score", %{"body" => body}, socket) do
    broadcast! socket, "new_score", %{body: body}

    f = File.read! "scores.json"

    {:ok, file} = File.open "scores.json", [:write, :utf8]
    IO.binwrite file, f <> body <> ","

    {:noreply, socket}
  end

  def handle_in("reset_score", %{}, socket) do
    broadcast! socket, "reset_score", %{}
    {:ok, file} = File.open "scores.json", [:write, :utf8]
    IO.binwrite file, ""

    {:noreply, socket}
  end

  def handle_ont("new_score", payload, socket) do
    push socket, "new_score", payload
    {:noreply, socket}
  end

  def handle_ont("reset_score", payload, socket) do
    push socket, "reset_score", payload
    {:noreply, socket}
  end

end
