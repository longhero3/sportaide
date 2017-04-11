class ClubsController < ApplicationController

  def index
    @clubs = Club.all
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
