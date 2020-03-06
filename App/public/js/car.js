const axios = require("axios");
const partnerToken = "90a427e62ab8493bb0785d22793a89e8";
const apiKey = "Basic Mjc2OWY4MmYtMGRmMi00ODE2LWI5Y2UtMjBlNmJjZWFiMjM3"
const vin = "5XXGN4A70CG022862"
const queryUrl = `http://api.carmd.com/v3.0/decode?vin=` + vin;
const queryUrl2 = 'http://api.carmd.com/v3.0/image?vin=' + vin;


function carInfo(vin) {
axios({
    method: 'get',
    url: queryUrl,
    responseType: 'json',
    headers: {
        "content-type": "application/json",
        "authorization": apiKey,
        "partner-token": partnerToken
    }
}).then(function(response) {
    console.log(response.data.data);
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
            "partner-token": partnerToken
        }
    }).then(function(response) {
        console.log(response.data.data);
    });
    };
