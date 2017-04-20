class WeatherController < ApplicationController
  def index
    @weather = Weather.lookup_by_location('Melbourne, VIC', Weather::Units::CELSIUS)

    @weatherClass = if @weather.condition.code < 5
                      'stormy'
                    elsif @weather.condition.code < 13
                      'rainy'
                    elsif @weather.condition.code < 17
                      'snowy'
                    elsif @weather.condition.code < 31
                      'cloudy'
                    elsif @weather.condition.code == 31
                      'starry'
                    elsif @weather.condition.code == 32
                      'sunny'
                    elsif @weather.condition.code == 33
                      'starry'
                    elsif @weather.condition.code == 34
                      'sunny'
                    elsif @weather.condition.code == 35
                      'rainy'
                    elsif @weather.condition.code <= 39
                      'stormy'
                    elsif @weather.condition.code == 40
                      'rainy'
                    elsif @weather.condition.code <= 43
                      'snowy'
                    elsif @weather.condition.code <= 47
                      'rainy'
                    else
                      'cloudy'
                    end
  end
end
