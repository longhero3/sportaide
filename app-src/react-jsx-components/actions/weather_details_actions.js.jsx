import fetch from 'isomorphic-fetch'

const LOAD_WEATHER_DETAILS_SUCCESS = 'LOAD_WEATHER_DATA_SUCCESS'
const LOAD_WEATHER_DETAILS_FAILURE = 'LOAD_WEATHER_DATA_FAILURE'


export function loadWeatherDetailsSuccess(weather) {
  return {type: LOAD_WEATHER_DETAILS_SUCCESS, weather};
}

export function loadWeatherDetailsFailure() {
  return {type: LOAD_WEATHER_DETAILS_FAILURE};
}

export function loadWeatherDetails() {
  return function(dispatch) {
    return WeatherApi.getWeatherDetailsInfo().then(weather => {
      dispatch(loadWeatherDetailsSuccess(weather));
  }).catch(error => {
      dispatch(loadWeatherDetailsFailure());
});
};
}

