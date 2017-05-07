class WeatherApi {
  static getWeatherInfo(){
    return fetch('/weather.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getWeatherDetailsInfo(){
    return fetch('/weather/details_weather.json').then(response => {
      return response.json();
  }).catch(error => {
    return error;
  });
  }

  static searchWeather(location){
    return fetch('/weather/search_weather.json?location=' + location).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default WeatherApi;