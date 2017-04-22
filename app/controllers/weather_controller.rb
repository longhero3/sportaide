class WeatherController < ApplicationController
  def index
    @weather = Weather.lookup_by_location('Melbourne, Australia', Weather::Units::CELSIUS)
    @weatherClass = weather_class @weather.condition.code
    @location = "Melbourne"
  end

  def search_weather
    if params[:location]
      begin
        @weather = Weather.lookup_by_location("#{params[:location]}, Australia", Weather::Units::CELSIUS)
        @location = params[:location]
      rescue => ex
        @weather = Weather.lookup_by_location('Melbourne, Australia', Weather::Units::CELSIUS)
        @location = "Melbourne"
      end
    else
      @weather = Weather.lookup_by_location('Melbourne, Australia', Weather::Units::CELSIUS)
      @location = "Melbourne"
    end
    @weatherClass = weather_class @weather.condition.code
  end


  private
    def weather_class code
      if code < 5
        'stormy'
      elsif code < 13
        'rainy'
      elsif code < 17
        'snowy'
      elsif code == 27
        'starry'
      elsif code == 29
        'starry'
      elsif code < 31
        'cloudy'
      elsif code == 31
        'starry'
      elsif code == 32
        'sunny'
      elsif code == 33
        'starry'
      elsif code == 34
        'sunny'
      elsif code == 35
        'rainy'
      elsif code <= 39
        'stormy'
      elsif code == 40
        'rainy'
      elsif code <= 43
        'snowy'
      elsif code <= 47
        'rainy'
      else
        'cloudy'
      end
    end
end
