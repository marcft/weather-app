const apiKey = '5e0fe9f27025408ba12193324232111';

export default async function getWeatherData(place) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}
