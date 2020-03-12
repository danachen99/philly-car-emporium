$(document).ready(() => {
        //js from foundation that makes modal work
        $(document).foundation();

        //get all cars from the database 
        $.get("/api/cars/all", data => {

            let carSection = $("#car-section");

            for (let i = data.length - 3; i < data.length; i++) {
                let newDiv = $("<div>");
                newDiv.addClass("columns small-12 medium-4 large-4");

                let newCard = $("<div>");
                newCard.addClass("car-card");
                newCard.html(`<h3 class="car-title">${data[i].make} ${data[i].model}</h3>
                <img src="" alt="Car Img">
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

            //calls function to grab watchlist storage on refresh
            renderSavedCar();
            //watchlist code that exexutes on clicking the 'Add to Watchlist' button on the homepage
            const addWatchBtn = document.querySelector("#car-section");
            let newArr = [];
            addWatchBtn.addEventListener("click", function(event) {
                event.preventDefault();
                if (event.target.matches("#addfavs1")) {
                    let info = [carArr[0].year, carArr[0].make, carArr[0].model];
                    newArr.push(info);
                    localStorage.setItem("savedCar", JSON.stringify(newArr));
                    renderSavedCar();
                } else if (event.target.matches("#addfavs2")) {
                    let info = [carArr[1].year, carArr[1].make, carArr[1].model];
                    newArr.push(info);
                    localStorage.setItem("savedCar", JSON.stringify(newArr));
                    renderSavedCar();
                } else if (event.target.matches("#addfavs3")) {
                    let info = [carArr[2].year, carArr[2].make, carArr[2].model];
                    newArr.push(info);
                    localStorage.setItem("savedCar", JSON.stringify(newArr));
                    renderSavedCar();
                }
            });
        });

        //Function that saves a car to the Favorites modal in an item element, pulling from local storage
        function renderSavedCar() {
            const list = document.querySelector(".list");
            list.innerHTML = "";
            var savedCar = JSON.parse(localStorage.getItem("savedCar"));
            for (var i = 0; i < savedCar.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = savedCar[i];
                list.append(li);
            }
        }
    })
    // module.exports = renderSavedCar