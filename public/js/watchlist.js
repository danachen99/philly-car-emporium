$(document).ready(() => {
    //js from foundation that makes modal work
    $(document).foundation();

     //calls function to grab watchlist storage on refresh
     renderSavedCar();
     
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
            <button class="add-to-favs" index="${i}">Add to Watchlist</button>`);
            newDiv.append(newCard);
            carSection.prepend(newDiv);
        }

       
        //watchlist code that exexutes on clicking the 'Add to Watchlist' button on the homepage
        const addWatchBtn = document.querySelector("#append-here");
        let newArr = [];
        addWatchBtn.addEventListener("click", function(event) {
            const savedCar = localStorage.getItem("savedCar");
            event.preventDefault();
            if (event.target.matches(".add-to-favs")) {
                let e = event.target;
                let index = e.getAttribute("index");
                console.log(data);
                let info = [data[index].year, data[index].make, data[index].model];
                if(savedCar){
                    const arr = JSON.parse(savedCar);
                    arr.push(info);
                    localStorage.setItem("savedCar", JSON.stringify(arr));
                } else {
                    newArr.push(info);
                    localStorage.setItem("savedCar", JSON.stringify(newArr));
                }
                
                renderSavedCar();
            }
        });
    })
    //Function that saves a car to the Favorites modal in an item element, pulling from local storage
    function renderSavedCar() {
        const list = document.querySelector(".list");
        list.innerHTML = "";
        var savedCar = JSON.parse(localStorage.getItem("savedCar"));
        if (savedCar != null){
        for (var i = 0; i < savedCar.length; i++) {
            var li = document.createElement("li");
            li.classList.add("listItem");
            li.innerHTML = `${savedCar[i][0]} - ${savedCar[i][1]} ${savedCar[i][2]}`;
            list.append(li);
        }
    } else {
        const list = document.querySelector(".list");
        list.innerHTML = ""; 
    }
    }
})

