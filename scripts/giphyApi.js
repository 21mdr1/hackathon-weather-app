
class GiphyApi {
    constructor(apiKey) {
        this.baseUrl = 'https://api.giphy.com';
        this.apiKey = apiKey;
    }

    async getGifs(query) {
        const URL = `${this.baseUrl}/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=1`;
        let response;
        
        try {
            response = await axios.get(URL);
        } catch (error) {
            console.log("Error fetching weather gif", error)
            //hardcode some gifs
        }

        return response.data;
    }
}

const giphyApi = new GiphyApi('QbFJVqBNmGUCniNIMUVNltFoZhQ6YmCd');

export default giphyApi;