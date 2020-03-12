const axios = require("axios");
require('dotenv').config()


const vin = "WBAGN63474DS45472";
const imgURL = 'http://api.carmd.com/v3.0/image?vin=';

module.exports = function carImage(vin) {
    return axios({
        method: 'get',
        url: imgURL + vin,
        responseType: 'json',
        headers: {
            "content-type": "application/json",
            "authorization": process.env.API_KEY,
            "partner-token": process.env.PARTNER_TOKEN
        }
    }).then(function(response) {
        console.log(response.data.data);
        return response.data.data;
    });

};