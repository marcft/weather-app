import './style.css';

import getWeatherData from './modules/apiRequest';
import updateElementsData from './modules/domUpdate';

const form = document.querySelector('form.search-form');

function displayWeather(placeName) {
  getWeatherData(placeName)
    .then((data) => {
      updateElementsData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

//Initialize wether data
displayWeather('Valencia Spain');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const placeName = document.querySelector('input[type="search"]').value;
  displayWeather(placeName);
});
