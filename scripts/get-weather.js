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

    console.log(getWeather);
}


weatherForm.addEventListener("submit", getWeatherByLocation)
