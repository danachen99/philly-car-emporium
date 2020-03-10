$(document).ready(() => {
    //js from foundation that makes modal work
    $(document).foundation();

    //calls function to grab watchlist storage on refresh
    renderSavedCar();
    
    //get all cars from the database 
    $.get("/api/cars/all", function (data) {
        let carArr = [];

        //gets the last three cars to display on index.html to show latest cars
        for (var i = data.length - 3; i < data.length; i++) {
            // console.log(data[i]);
            carArr.push(data[i]);

            //this works but not exactly dry 
            // carTitle.text(data[i].make);
            // let newDiv = $("<div>");
            // newDiv.addClass("columns small-12 medium-4 large-4");
            // let newCard = $("<div>");;
            // newCard.addClass("car-card");
            // // let newImg = $("<img>");
            // let newTitle = $("<h3>")
            // newTitle.addClass("car-title")
            // newTitle.text(`${data[i].make}`);
            // let newPTag = $("<p>");
            // newPTag.text(`${data[i].year} ${data[i].make} ${data[i].model} ${data[i].trim}`);
            // // let infoButton = $("<button>");
            // // infoButton.addClass("car-info")
            // // let addButton = $("<button>");
            // newDiv.append(newCard);
            // newDiv.append(newTitle);
            // newDiv.append(newPTag);
            // carSection.prepend(newDiv);
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
        // carTitle0.text(`${carArr[0].year} ${carArr[0].make} ${carArr[0].model} ${carArr[0].trim}`);
        // carTitle1.text(`${carArr[1].year} ${carArr[1].make} ${carArr[1].model} ${carArr[1].trim}`);
        // carTitle2.text(`${carArr[2].year} ${carArr[2].make} ${carArr[2].model} ${carArr[2].trim}`);

        //watchlist code that exexutes on clicking the 'Add to Watchlist' button on the homepage
        const addWatchBtn = document.querySelector("#car-section");
        let newArr = [];
        addWatchBtn.addEventListener("click", function (event) {
            event.preventDefault();

            if (event.target.matches("#addfavs1")) {
                let info = [carArr[0].year, carArr[0].make, carArr[0].model];
                newArr.push(info);
                localStorage.setItem("savedCar", JSON.stringify(newArr));
                renderSavedCar();
            }
            else if (event.target.matches("#addfavs2")) {
                let info = [carArr[1].year, carArr[1].make, carArr[1].model];
                newArr.push(info);
                localStorage.setItem("savedCar", JSON.stringify(newArr));
                renderSavedCar();
            }
            else if (event.target.matches("#addfavs3")) {
                let info = [carArr[2].year, carArr[2].make, carArr[2].model];
                newArr.push(info);
                localStorage.setItem("savedCar", JSON.stringify(newArr));
                renderSavedCar();
            }
        })
    })

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
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}