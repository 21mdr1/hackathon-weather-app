import unsplashApi from "./unsplashApi.js";
import giphyApi from "./giphyApi.js";
import weatherInstance from './weather-api.js'
import geoAPI from "./geolocation-api.js";
import {weather, image, gif} from './testData.js'

export default async function displayWeather(weather) {
    //background
    const weatherPic = document.querySelector('.weather__background');
    // const image = await unsplashApi.getImage(weather.weather[0].main); // uncomment for demo
    weatherPic.style.backgroundImage = `url(${image.results[0].urls.regular})` // unsplash response


    const weatherCard = document.querySelector('.weather-card');
    weatherCard.innerHTML = '';

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
    // const gif = await giphyApi.getGifs(weather.weather[0].main); //uncomment for demo
    weatherGif.src = gif.data[0].images.original.url // giphy response

    weatherGif.alt = `${weather.weather[0].main} gif`

    const description = document.createElement('p');
    description.classList.add('weather-card__description')
    description.textContent = weather.weather[0].description; // could also do .main

    left.appendChild(weatherGif);
    left.appendChild(description);

    // add to right side
    const temp = document.createElement('p');
    temp.classList.add('weather-card__temp--big');
    temp.textContent = Math.round(weather.main.temp)

    const low = document.createElement('p');
    low.classList.add('weather-card__temp--small');
    low.textContent = Math.round(weather.main.temp_min);

    const high = document.createElement('p');
    high.classList.add('weather-card__temp--small');
    high.textContent = Math.round(weather.main.temp_max);

    right.appendChild(temp);
    right.appendChild(low);
    right.appendChild(high);

}


await displayWeather(weather);