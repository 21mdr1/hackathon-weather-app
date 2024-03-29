class GeoLocationApi{
    constructor(){
        this.apiKey = YOUR_API_KEY;
        this.baseUrl = 'https://api.geoapify.com/v1/';
    }

    async getUserLocationByIP(){
        try {
            const userLocationResponse =  await axios.get(`${this.baseUrl}/ipinfo?apiKey=${this.apiKey}`);

            const locationData = userLocationResponse.data;
            const location = {
                latitude: locationData.location.latitude,
                longitude: locationData.location.longitude
            }

            // console.log(location);
            return location;
        } catch (error) {
            //handle error
            console.error(error);
        }
        
    }



    async getUserLocationByCity(cityName){
        try {
            const userLocationResponse =  await axios.get(`${this.baseUrl}/geocode/search?text="${cityName}"&limit=1&type=city&format=json&apiKey=${this.apiKey}`);
            
            const cityData = userLocationResponse.data.results[0];

            const location = {
                latitude: cityData.lat,
                longitude: cityData.lon,
                city: cityData.city,
                country: cityData.country
            }
            
            return location;
            
        } catch (error) {
            //handle error
            console.error(error);
        }
    }
}


export default GeoLocationApi;

