
class UnsplashApi {
    constructor(apiKey) {
        this.baseUrl = 'https://api.unsplash.com';
        this.apiKey = apiKey;
    }
    async getImage(query) {
        const URL = `${this.baseUrl}/search/photos/?client_id=${this.apiKey}&content_filter=high&orientation=landscape&per_page=1&query=${query}`
        let response;
        try{
            response = await axios.get(URL);
        } catch (error) {
            console.log('There was an error fetching background image');
            // have some hard coded images
        }
        return response.data;

    }
}

const unsplashApi = new UnsplashApi(YOUR_API_KEY);

export default unsplashApi;