function defaultWeatherDetailsState(){
  return ({
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

const WeatherDetailsReducer = (state = defaultWeatherDetailsState(), action) => {
  switch (action.type) {
    case LOAD_WEATHER_DETAILS_SUCCESS:
      return Object.assign({},state, {
        details: action.weather.details
      })

    case LOAD_WEATHER_DETAILS_FAILURE:
      return Object.assign({}, state, defaultWeatherDetailsState())
    default:
      return state
  }
}

export default WeatherDetailsReducer