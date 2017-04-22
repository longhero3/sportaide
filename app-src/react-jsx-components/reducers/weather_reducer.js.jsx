function defaultWeatherState(){
  return ({
    weatherClass: "sunny",
    text: "Sunny Day",
    temp: 16,
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
        text: action.weather.text,
        temp: action.weather.temp,
        subLocation: action.weather.sub_location,
        tmr: action.weather.tomorrow,
        otherDay: action.weather.other_day
      })
    default:
      return state
  }
}

export default WeatherReducer