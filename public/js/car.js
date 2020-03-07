const axios = require("axios");
require('dotenv').config();


const vin = "1VXBR12EXCP901214";
const queryUrl = `http://api.carmd.com/v3.0/decode?vin=` + vin;
const queryUrl2 = 'http://api.carmd.com/v3.0/image?vin=' + vin;

module.exports = function carInfo(vin) {
    return axios({
        method: 'get',
        url: queryUrl,
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