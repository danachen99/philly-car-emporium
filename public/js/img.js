const axios = require("axios");
require('dotenv').config()


const vin = "WBAGN63474DS45472";
const imgURL = 'http://api.carmd.com/v3.0/image?vin=' + vin;

module.exports = function carImage() {
    return axios({
        method: 'get',
        url: imgURL,
        responseType: 'json',
        headers: {
            "content-type": "application/json",
            "authorization": process.env.API_KEY,
            "partner-token": process.env.PARTNER_TOKEN
        }
    }).then(function(response) {
        // console.log(response.data.data);
        return response.data.data;
    });

};