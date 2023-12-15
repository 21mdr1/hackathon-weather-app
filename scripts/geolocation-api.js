class GeoLocationApi{
    constructor(){
        this.apiKey = "0b34fd20b8b94136826cb192ab879cff";
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
            console.log(location);
            return location;
        } catch (error) {
            //handle error
            console.error(error);
        }
        
    }


    async getUserLocationByCity(cityName=""){
        const citytName = "Berlin";
        const userLocationResponse =  await axios.get(`${this.baseUrl}/geocode/search?text="${citytName}"&limit=1&type=city&format=json&apiKey=${this.apiKey}`);
        
        const cityData = userLocationResponse.data.results[0];

        const location = {
            latitude: cityData.lat,
            longitude: cityData.lon
        }
        
        console.log(location);
    }
}


const geoAPI = new GeoLocationApi()

async function testFunctions(){
    const location = await geoAPI.getUserLocationByIP();
    const longlat = await geoAPI.getUserLocationByCity();
}

testFunctions();
