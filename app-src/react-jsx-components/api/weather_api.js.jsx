class WeatherApi {
  static getWeatherInfo(){
    return fetch('/weather.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default WeatherApi;