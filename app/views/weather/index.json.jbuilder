json.class_name @weather.condition.text.downcase
json.temp @weather.condition.temp
json.text @weather.condition.text
json.location "#{@weather.location.city}, #{@weather.location.country}"
