const axios = require("axios");
require('dotenv').config()

const queryUrl = `http://api.carmd.com/v3.0/decode?vin=`;
const queryUrl2 = 'http://api.carmd.com/v3.0/image?vin=';

module.exports = function carInfo(vin) {
    return axios({
        method: 'get',
        url: queryUrl + vin,
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

function carImage(vin) {
    axios({
        method: 'get',
        url: queryUrl2,
        responseType: 'json',
        headers: {
            "content-type": "application/json",
            "authorization": process.env.API_KEY,
            "partner-token": process.env.PARTNER_TOKEN
        }
    }).then(function(response) {
        console.log(response.data.data);
    });

};