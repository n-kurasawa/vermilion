defmodule Api.ScoreChannel do
  use Phoenix.Channel
  require Logger

  def join("scores:get", auth_msg, socket) do
    Logger.debug "join"
    {:ok, %{messages: "joined"}, socket}
  end

  def handle_in("new_score", %{"body" => body}, socket) do
    broadcast! socket, "new_score", %{body: body}
    {:noreply, socket}
  end

  def handle_ount("new_score", payload, socket) do
    push socket, "new_score", payload
    {:noreply, socket}
  end

end
