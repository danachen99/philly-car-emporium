$(document).ready(() => {
    //js from foundation that makes modal work
    $(document).foundation();

    //get all cars from the database 
    $.get("/api/cars/all", data => {
        let carArr = [];
        //gets the last three cars to display on index.html to show latest cars
        for (var i = data.length - 3; i < data.length; i++) {
            carArr.push(data[i]);
        }

        //set the text of all titles using an array
        let titleArr = [$(".car-title0"), $(".car-title1"), $(".car-title2")];
        for (let i = 0; i < titleArr.length; i++) {
            titleArr[i].text(`${carArr[i].year} ${carArr[i].make} ${carArr[i].model} ${carArr[i].trim}`);
        }

        let infoArr = [$("#info0"), $("#info1"), $("#info2")];
        for (let i = 0; i < titleArr.length; i++) {
            infoArr[i].text(`Engine: ${carArr[i].engine} || Transmission: ${carArr[i].transmission}`);
        }
    });

    // carTitle0.text(`${carArr[0].year} ${carArr[0].make} ${carArr[0].model} ${carArr[0].trim}`);
    // carTitle1.text(`${carArr[1].year} ${carArr[1].make} ${carArr[1].model} ${carArr[1].trim}`);
    // carTitle2.text(`${carArr[2].year} ${carArr[2].make} ${carArr[2].model} ${carArr[2].trim}`);

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

    //calls function to grab watchlist storage on refresh
    renderSavedCar();
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
module.exports = renderSavedCar