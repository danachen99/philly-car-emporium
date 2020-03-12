$(document).ready(() => {

    getInfo();

    function getInfo() {
        $(document).foundation();
        $.get("/api/cars/all", data => {
            let carSection = $("#append-here");

            for (let i = 0; i < data.length; i++) {
                // console.log(data[i]);
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
                <button class="add-to-favs">Add to Watchlist</button>`);

                newDiv.append(newCard);
                carSection.prepend(newDiv);
            }
        });
    }

})