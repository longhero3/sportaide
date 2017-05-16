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

    @lat = @clubs.count == 0 ? -37.851221000000002 : @clubs.map(&:lat).sum / @clubs.size
    @lng = @clubs.count == 0 ? 144.72653700000001 : @clubs.map(&:lng).sum / @clubs.size
  end
end
