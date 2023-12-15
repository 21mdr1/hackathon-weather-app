
class GiphyApi {
    constructor(apiKey) {
        this.baseUrl = 'api.giphy.com';
        this.apiKey = apiKey;
    }

    async getGifs(query) {
        const URL = `${baseUrl}/v1/gifs/search&q=${query}&limit=1`;
        let response;
        console.log(response);
        try {

        } catch (error) {
            console.log("Error fetching weather gif", error)
            //hardcode some gifs
        }

        return response.data;
    }
}

const giphyApi = new GiphyApi('QbFJVqBNmGUCniNIMUVNltFoZhQ6YmCd');

export default giphyApi;

// QbFJVqBNmGUCniNIMUVNltFoZhQ6YmCd