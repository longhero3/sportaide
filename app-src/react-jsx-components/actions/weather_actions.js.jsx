import fetch from 'isomorphic-fetch'

const LOAD_WEATHER_DATA_SUCCESS = 'LOAD_WEATHER_DATA_SUCCESS'


export function loadWeatherSuccess(weather) {
  return {type: LOAD_WEATHER_DATA_SUCCESS, weather};
}

export function loadWeatherInfo() {
  return function(dispatch) {
    return WeatherApi.getWeatherInfo().then(weather => {
      dispatch(loadWeatherSuccess(weather));
  }).catch(error => {
    throw(error);
});
};
}