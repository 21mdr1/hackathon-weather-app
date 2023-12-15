import weatherApi from "./weather-api.js";
import geoLocationApi from "./geolocation-api.js";

const geoLocationInst = new geoLocationApi();
const weatherInst = new weatherApi();

const weatherForm = document.getElementById("weather-form");

async function getWeatherByLocation(event){
    event.preventDefault();
    const locationInput = event.target.location_name;
    const locationName = locationInput.value
    const getLongLat = await geoLocationInst.getUserLocationByCity(locationName);

    console.log(getLongLat);

    const getWeather = await weatherInst.getWeatherByLocation(getLongLat.longitude, getLongLat.latitude);
    displayWeather(getWeather);   
}

function displayWeather(weatherObj){
    //TODO:eplace with the code written by Maria
    const cityEl = document.querySelector("#cityWeather");
    const tempFahrenheitEl = document.getElementById("tempFahrenheit");
    const tempCelsiusEl = document.getElementById("tempCelsius");
    
    cityEl.textContent = weatherObj.weather;
    tempCelsiusEl.prepend(weatherObj.temp_celsius);
    tempFahrenheitEl.prepend(weatherObj.temp_fahrenheit);
}

weatherForm.addEventListener("submit", getWeatherByLocation)
//displayWeather();
