const axios = require('axios');
const config = require('config');

const url = config.get('dog_api.url');
const xApiKey = config.get('dog_api.x-api-key');

class TheDogsAPI {
    static async getDogs(params){
        let axiosConfig = {
            method: 'GET',
            url: url + params,
            headers: {
                'x-api-key': xApiKey
            }
        }
        return await axios(axiosConfig);
    }
}

module.exports = TheDogsAPI