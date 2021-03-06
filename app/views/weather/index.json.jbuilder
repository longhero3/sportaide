json.class_name @weatherClass
json.temp @weather.condition.temp
json.text @weather.condition.text
json.location "#{@weather.location.city}, #{@weather.location.country}"
json.sub_location @location.camelize
json.tomorrow do
  json.text 'Tomorrow'
  json.high @weather.forecasts[1].high
  json.low @weather.forecasts[1].low
end
json.other_day do
  json.text @weather.forecasts[2].date.strftime("%d/%m")
  json.high @weather.forecasts[2].high
  json.low @weather.forecasts[2].low
end
