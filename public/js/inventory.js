$(document).ready(() => {
    $(document).foundation();
    $.get("/api/cars/all", data => {
        let carSection = $("#append-here");

        for (let i = 0; i < data.length; i++) {

            let newDiv = $("<div>");
            newDiv.addClass("columns small-12 medium-4 large-4");

            let newCard = $("<div>");
            newCard.addClass("car-card");
            newCard.html(`<h3 class="car-title">${data[i].make} ${data[i].model}</h3>
                <p>Year: ${data[i].year}</p>
                <p>Make: ${data[i].make}</p>
                <p>Model: ${data[i].model}</p>
                <p>Trim: ${data[i].trim}</p>
                <p>Engine: ${data[i].engine}</p>
                <p>Transmission: ${data[i].transmission}</p>
                <button class="delete">Delete From Inventory</button>`);

            newDiv.append(newCard);
            carSection.prepend(newDiv);
        }
    });

    var vinInput = $("#fname");
    var addBtn = $(".addVehicleSubmit");
    const queryUrl = `http://api.carmd.com/v3.0/decode?vin=`;

    addBtn.on("click", function(event) {
        event.preventDefault();

        var carData = {
            vin: vinInput.val().trim(),
        };
        // If we have a vin, run the submitCar function
        submitCar(carData.vin);
        vinInput.val("Enter a Vin Number");
        location.reload();
    });

    function submitCar(vin) {
        $.post("/api/cars", { vin })
            .then(function(data) {
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch();
    }



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
            return response.data.data;
        });
    };


})