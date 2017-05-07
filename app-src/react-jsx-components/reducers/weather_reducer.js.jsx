function defaultWeatherState(){
  return ({
    weatherClass: "sunny",
    weatherText: "Sunny Day",
    weatherTemp: 16,
    tmr: {
      text: 'Tomorrow',
      high: 15,
      low: 10
    },
    otherDay: {
      text: '24/4',
      high: 15,
      low: 10
    }
  });
}

const WeatherReducer = (state = defaultWeatherState(), action) => {
  switch (action.type) {
    case LOAD_WEATHER_DATA_SUCCESS:
      return Object.assign({},state, {
        weatherClass: action.weather.class_name,
        weatherText: action.weather.text,
        weatherTemp: action.weather.temp,
        subLocation: action.weather.sub_location,
        tmr: action.weather.tomorrow,
        otherDay: action.weather.other_day
      })

    case LOAD_WEATHER_DATA_FAILURE:
      return Object.assign({}, state, defaultWeatherState())
    default:
      return state
  }
}

export default WeatherReducer