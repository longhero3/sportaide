json.details do
  json.array!(@weather.forecasts[0..4]) do |forecast|
    json.text forecast.date.strftime("%a")
    json.fulltext forecast.date.strftime("%A, %d %B")
    json.high forecast.high
    json.low forecast.low
    json.classname weather_class forecast.code
  end
end
