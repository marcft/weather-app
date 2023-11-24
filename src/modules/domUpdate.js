const currentWeatherDiv = document.querySelector('div.current-weather');

const placeNameH1 = currentWeatherDiv.querySelector('.place-name');
const temperatureH2 = currentWeatherDiv.querySelector('.temperature');
const tempFeelingSpan = currentWeatherDiv.querySelector('.temp-feeling');
const humiditySpan = currentWeatherDiv.querySelector('.humidity');
const windSpan = currentWeatherDiv.querySelector('.wind');

export default function updateElementsData(weatherData) {
  placeNameH1.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
  temperatureH2.textContent = weatherData.current.temp_c + ' °C';
  tempFeelingSpan.textContent = weatherData.current.feelslike_c + ' °C';
  humiditySpan.textContent = weatherData.current.humidity + ' %';
  windSpan.textContent = weatherData.current.wind_kph + ' km/h';
}
