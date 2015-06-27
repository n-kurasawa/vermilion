defmodule Api.ScoreView do
  use Api.Web, :view

  def render("index.json", %{scores: scores}) do
    %{scores: scores}
  end

  def render("create.json", %{score: score}) do
    score
  end
end
