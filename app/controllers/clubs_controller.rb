class ClubsController < ApplicationController

  def index
    @clubs = Club.all.take(100)
  end

  def show
    @club = Club.find(params[:id])
  end

  def search_clubs
    @keywords = params[:text]
    if @keywords && !@keywords.blank?
      @clubs = Club.search_by_keywords(params[:text])
    else
      @clubs = Club.all
    end
  end
end
