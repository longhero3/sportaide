import fetch from 'isomorphic-fetch'

const LOAD_WEATHER_DATA_SUCCESS = 'LOAD_WEATHER_DATA_SUCCESS'
const LOAD_WEATHER_DATA_FAILURE = 'LOAD_WEATHER_DATA_FAILURE'


export function loadWeatherSuccess(weather) {
  return {type: LOAD_WEATHER_DATA_SUCCESS, weather};
}

export function loadWeatherFailure() {
  return {type: LOAD_WEATHER_DATA_FAILURE};
}

export function loadWeatherInfo() {
  return function(dispatch) {
    return WeatherApi.getWeatherInfo().then(weather => {
      dispatch(loadWeatherSuccess(weather));
  }).catch(error => {
    dispatch(loadWeatherFailure());
});
};
}

export function loadWeatherOnLocation(location) {
  return function(dispatch) {
    return WeatherApi.searchWeather(location).then(weather => {
      dispatch(loadWeatherSuccess(weather));
  }).catch(error => {
    dispatch(loadWeatherFailure());
});
};
}