class WeatherApi{
    constructor(){
        this.apiKey = '9942044972537819a9cb8813eb5d8edf';
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }



    async getWeatherByLocation(longitude, latitude){
        const URL = `${this.baseUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`;

        try {
            const weatherResponse = await axios.get(URL);
            const locationWeatherData = weatherResponse.data;
            const locationWeather = {
                temp_celsius:Math.floor(locationWeatherData.main.temp), //Math.floor(data.main.temp - KELVIN)
                temp_max_celsius : Math.floor(locationWeatherData.main.temp_max),
                temp_min_celsius : Math.floor(locationWeatherData.main.temp_min),
                weather: locationWeatherData.weather[0].description,
                temp_fahrenheit: this.celsiusToFahrenheit(Math.floor(locationWeatherData.main.temp)),
                temp_max_fahrenheit: this.celsiusToFahrenheit(locationWeatherData.main.temp_max),
                temp_min_fahrenheit: this.celsiusToFahrenheit(locationWeatherData.main.temp_min)

            }
            
            //console.log(locationWeather);
            return locationWeather;
        } catch (error) {
            console.log(error)
        }        
    }

// export default showsInstance;

    celsiusToFahrenheit(temperature){
        return Math.floor((temperature * 9/5) + 32);
    }
}

export default WeatherApi;

