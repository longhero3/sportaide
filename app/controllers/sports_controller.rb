class SportsController < ApplicationController
  def search_sports
    @sports = if params[:term]
       Sport.search_by_title(params[:term])
    else
      Sport.take(3)
    end
  end
end
