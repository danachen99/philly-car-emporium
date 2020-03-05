const axios = require("axios");
const partnerToken = "90a427e62ab8493bb0785d22793a89e8";
const queryUrl = `http://api.carmd.com/v3.0/decode?vin=1GNALDEK9FZ108495`;
axios({
    method: 'get',
    url: queryUrl,
    responseType: 'json',
    headers: {
        "content-type": "application/json",
        "authorization": "Basic Mjc2OWY4MmYtMGRmMi00ODE2LWI5Y2UtMjBlNmJjZWFiMjM3",
        "partner-token": partnerToken
    }
}).then(function(response) {
    console.log(response);
});