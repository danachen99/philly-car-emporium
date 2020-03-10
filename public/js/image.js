const axios = require("axios");
require('dotenv').config()

const vin = "WBAGN63474DS45472";
const queryUrl2 = `http://api.carmd.com/v3.0/image?vin=` + vin;


module.exports =function carImage(vin) {
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
        console.log(response); 
    });

};