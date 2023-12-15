
class ISSApi {
    constructor() {
        this.baseURL = 'http://api.open-notify.org/iss-now.json'
    }

    async getCoords() {
        let response;

        try {
            response = await axios.get(this.baseURL);
        } catch (error) {
            console.log('Error fetching ISS data.', error)
        }

        return response.data.iss_position;
    }
}

export default ISSApi;