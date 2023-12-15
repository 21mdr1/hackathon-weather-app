import unsplashApi from "./unsplashApi.js";
import giphyApi from "./giphyApi.js";

import WeatherApi from './weather-api.js'
import GeoLocationApi from "./geolocation-api.js";
import {weather, image, gif} from './testData.js'
import ISSApi from "./issApi.js";

const geoAPI = new GeoLocationApi();
const weatherAPI = new WeatherApi ();
const issAPI = new ISSApi();

async function displayWeather(weather, container) {

    const weatherContainer = document.querySelector(container);
    weatherContainer.innerHTML = '';

    // background
    const weatherPic = document.createElement('div');
    weatherPic.classList.add('weather__background');
    if (weather) {
      // const image = await unsplashApi.getImage(weather.weather); // uncomment for demo
      weatherPic.style.backgroundImage = `url(${image.results[0].urls.regular})` // unsplash response
    }
    weatherContainer.appendChild(weatherPic);

    // card
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card')
    weatherPic.appendChild(weatherCard);

    // left and right divs
    const left = document.createElement('div');
    left.classList.add('weather-card__left');
    const right = document.createElement('div');
    right.classList.add('weather-card__right');

    weatherCard.appendChild(left);
    weatherCard.appendChild(right);
    
    // add to left side
    const weatherGif = document.createElement('img');
    weatherGif.classList.add('weather-card__gif')

    if (weather) {
      // const gif = await giphyApi.getGifs(weather.weather); //uncomment for demo
      weatherGif.src = gif.data[0].images.original.url // giphy response
    }

    if (weather) {
      weatherGif.alt = `${weather.weather} gif`
    }

    const description = document.createElement('p');
    description.classList.add('weather-card__description')
    if (weather) {
      description.textContent = weather.weather; // could also do .main
    }

    left.appendChild(weatherGif);
    left.appendChild(description);

    // add to right side
    const temp = document.createElement('p');
    temp.classList.add('weather-card__temp--big');

    if (weather) {
      temp.textContent = `${Math.round(weather.temp_celsius)}°C`
    }

    const low = document.createElement('p');
    low.classList.add('weather-card__temp--small');
    if (weather) {
      low.textContent = `Min temp: ${Math.round(weather.temp_min_celsius)}°C`;
    }

    const high = document.createElement('p');
    high.classList.add('weather-card__temp--small');
    if (weather) {
      high.textContent = `Max temp: ${Math.round(weather.temp_max_celsius)}°C`;
    }


    right.appendChild(temp);
    right.appendChild(low);
    right.appendChild(high);

}


async function displayCurrentWeather(weather) {
  await displayWeather(weather, '.weather');
}

async function displayOutputWeather(weather) {
  await displayWeather(weather, '.main__output');
}

const weatherForm = document.getElementById("weatherForm");

async function getWeatherByLocation(event){
    event.preventDefault();
    const locationInput = event.target.location_name;
    const locationName = locationInput.value
    const getLongLat = await geoAPI.getUserLocationByCity(locationName);

    console.log(getLongLat);

    const getWeather = await weatherAPI.getWeatherByLocation(getLongLat.longitude, getLongLat.latitude);

    locationInput.value = '';
    displayOutputWeather(getWeather);   
}

// display current weather:
// const userLocation = await geoAPI.getUserLocationByIP(); //uncomment for demo
// const weatherInfo = await weatherAPI.getWeatherByLocation(userLocation.longitude, userLocation.latitude); //uncomment for demo
await displayCurrentWeather(weather);
// await displayCurrentWeather(weatherInfo);

weatherForm.addEventListener("submit", getWeatherByLocation)
// make output weather placeholder
displayOutputWeather();

const issButton = document.querySelector('.main__input-button')

issButton.addEventListener('click', async (event) => {
  const location = await issAPI.getCoords();
  const weather =  await weatherAPI.getWeatherByLocation(location.longitude, location.latitude);
  displayOutputWeather(weather);
})

