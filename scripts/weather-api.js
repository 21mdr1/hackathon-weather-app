class WeatherApi{
    constructor(){
        this.apiKey = '9942044972537819a9cb8813eb5d8edf';
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }


    async getWeatherByLocation(longitude, latitude){

        try {
            const weatherResponse = await axios.get(`${this.baseUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`);

            const locationWeatherData = weatherResponse.data;

            const locationWeather = {
                temp:locationWeatherData.main.temp,
                temp_max : locationWeatherData.main.temp_max,
                temp_min : locationWeatherData.main.temp_min,
                weather: locationWeatherData.weather[0].description

            }
            
            //console.log(weatherResponse);
            //console.log(locationWeather);

            return locationWeather;
        } catch (error) {
            
        }        
    }
}

export default WeatherApi;