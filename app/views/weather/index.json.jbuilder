json.class_name @weatherClass
json.temp @weather.condition.temp
json.text @weather.condition.text
json.location "#{@weather.location.city}, #{@weather.location.country}"
