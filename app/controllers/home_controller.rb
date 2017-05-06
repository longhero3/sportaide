class HomeController < ApplicationController
  def index
    responses = HTTParty.get('http://newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=f5035499dacf4b50adfc7123c5e3fe2f')
    @articles = []
    if responses["status"]
      @articles = responses["articles"]
    end
  end
end
