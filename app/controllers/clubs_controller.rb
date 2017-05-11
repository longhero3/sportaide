class ClubsController < ApplicationController

  def index
    @clubs = Club.all.take(50)
  end

  def show
    @club = Club.find(params[:id])
  end

  def search_clubs
    @keywords = params[:text]
    if @keywords && !@keywords.blank?
      if @keywords == "AFL" || @keywords == "afl"
        @clubs = Club.search_by_keywords("australian football")
      else
        @clubs = Club.search_by_keywords(params[:text])
      end
    else
      @clubs = Club.all.take(50)
    end
  end
end
