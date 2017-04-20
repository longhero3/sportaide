const WeatherReducer = (state = {weatherClass: "sunny", text: "Sunny Day", temp: 16}, action) => {
  switch (action.type) {
    case LOAD_WEATHER_DATA_SUCCESS:
      return Object.assign({},state, {
        weatherClass: action.weather.class_name,
        text: action.weather.text,
        temp: action.weather.temp
      })
    default:
      return state
  }
}

export default WeatherReducer