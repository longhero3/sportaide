class WeatherController < ApplicationController
  def index
    @weather = Weather.lookup_by_location('Melbourne, VIC', Weather::Units::CELSIUS)
  end
end
