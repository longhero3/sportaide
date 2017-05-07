module ApplicationHelper
  def error_class error
    error ? 'error' : ''
  end

  def weather_class code
    if code < 5
      'day-storm-showers'
    elsif code < 13
      'day-rain'
    elsif code < 17
      'day-snow'
    elsif code == 27
      'night-clear'
    elsif code == 29
      'night-clear'
    elsif code < 31
      'day-cloudy'
    elsif code == 31
      'night-clear'
    elsif code == 32
      'day-sunny'
    elsif code == 33
      'night-clear'
    elsif code == 34
      'day-sunny'
    elsif code == 35
      'day-rain'
    elsif code <= 39
      'day-storm-showers'
    elsif code == 40
      'day-rain'
    elsif code <= 43
      'day-snow'
    elsif code <= 47
      'day-rain'
    else
      'day-cloudy'
    end
  end
end
