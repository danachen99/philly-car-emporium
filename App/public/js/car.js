const axios = require("axios");
const config = require("../../config/config.js")
const apiKey = config.apiKey;
const partToken = config.partnerToken;


const vin = "5XXGN4A70CG022862";
const queryUrl = `http://api.carmd.com/v3.0/decode?vin=` + vin;
const queryUrl2 = 'http://api.carmd.com/v3.0/image?vin=' + vin;

module.exports = function carInfo(vin) {
    return axios({
        method: 'get',
        url: queryUrl,
        responseType: 'json',
        headers: {
            "content-type": "application/json",
            "authorization": apiKey,
            "partner-token": partToken
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
            "authorization": apiKey,
            "partner-token": partToken
        }
    }).then(function(response) {
        console.log(response.data.data);
    });

};