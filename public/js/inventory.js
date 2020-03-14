$(document).ready(() => {
    $(document).foundation();
    $.get("/api/cars/all", data => {
        let carSection = $("#append-here");
        //for each car in the database, add new card to the page
        for (let i = 0; i < data.length; i++) {

            let newDiv = $("<div>");
            newDiv.addClass("columns small-12 medium-6 large-4");

            let newCard = $("<div>");
            newCard.addClass("car-card");
            newCard.html(`<h3 class="car-title">${data[i].make} ${data[i].model}</h3>
                <p><b>Year:</b> ${data[i].year}</p>
                <p><b>Make:</b> ${data[i].make}</p>
                <p><b>Model:</b> ${data[i].model}</p>
                <p><b>Trim:</b> ${data[i].trim}</p>
                <p><b>Engine:</b> ${data[i].engine}</p>
                <p><b>Transmission:</b> ${data[i].transmission}</p>
                <button class="delete" index="${i}">Delete From Inventory</button>`);

            newDiv.append(newCard);
            carSection.prepend(newDiv);
        }

        //delete button will grab the id of the selected car and send to deleteCar
        let deleteBtn = $(".delete");
        deleteBtn.on("click", event => {
            event.preventDefault();
            let e = event.target;
            let index = e.getAttribute("index");
            deleteCar(data[index].id);
        });

        //will call DELETE and reload the page
        const deleteCar = id => {
            $.ajax({
                    method: "DELETE",
                    url: "/api/cars/" + id
                })
                .then(function() {
                    location.reload();
                });
        }

        let vinInput = $("#fname");
        let addBtn = $(".addVehicleSubmit");
        const queryUrl = `http://api.carmd.com/v3.0/decode?vin=`;

        addBtn.on("click", function(event) {
            event.preventDefault();

            let carData = {
                vin: vinInput.val().trim(),
            };
            // If we have a vin, run the submitCar function
            submitCar(carData.vin);
            vinInput.val("Enter a Vin Number");

        });

        function submitCar(vin) {
            $.post("/api/cars", { vin })
                .then(function(data) {
                    location.reload();
                    // If there's an error, handle it by throwing up a bootstrap alert
                })
                .catch();
        }
    });

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
});