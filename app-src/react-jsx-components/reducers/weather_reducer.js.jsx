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
    },

    details: [
    {
      text: '7/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    },
    {
      text: '8/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    },
    {
      text: '9/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    },
    {
      text: '10/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    },
    {
      text: '11/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    }]
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
        otherDay: action.weather.other_day,
        details: action.weather.details
      })
    default:
      return state
  }
}

export default WeatherReducer