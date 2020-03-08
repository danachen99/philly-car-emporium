// Requiring our models and passport as we've configured it
let db = require("../models");
let carInfo = require("../public/js/car.js");
let passport = require("../config/passport");
const vin = "5XXGN4A70CG022862";

module.exports = (app) => {
    // CREATE 
    app.post("/api/cars", (req, res) => {
        // Add sequelize code for creating a post using req.body,
        // then return the result using res.json
        carInfo(vin).then(data => {
            console.log(data)
            db.Car.create(data).then(dbCar => res.json(dbCar));
            //res.status(204).end()
        });
    });

    //UPDATE ... but for pricing table? 
    //create model for pricing and associate them 
    app.put("", (req, res) => {

    });

    //DELETE ... destroy by ID 
    app.delete("/api/cars/:id", (req, res) => {
        Car.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.end());
    })

    // ================================== 
    //READ 
    // cars/:make ... :model .... :
    //Can we use promise all here to remove repetitiveness? 
    app.get("/api/vin/:vin", (req, res) => {
        Car.findOne({
            where: {
                vin: req.params.vin
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/make/:make", (req, res) => {
        Car.findAll({
            where: {
                make: req.params.make
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/model/:model", (req, res) => {
        Car.findAll({
            where: {
                model: req.params.model
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/year/:year", (req, res) => {
        Car.findAll({
            where: {
                year: req.params.year
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/manufacturer/:manufacturer", (req, res) => {
        Car.findAll({
            where: {
                manufacturer: req.params.manufacturer
            }
        }).then(results => {
            res.json(results)
        });
    });

    //------------------------------------------------------------
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function(req, res) {
        db.User.create({
                email: req.body.email,
                password: req.body.password
            })
            .then(function() {
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
}
// get cuisine id from zamato api with search text
function getCuisineId(data, searchItem) {
    var cuisines = data.cuisines,
      id;
  
    cuisines.forEach(function(cuisine) {
      var foodType = cuisine.cuisine.cuisine_name.toLowerCase(),
        idNum = cuisine.cuisine.cuisine_id;
      if (foodType == searchItem.toLowerCase()) {
        id = idNum;
      }
    });
    if (typeof id !== "undefined") {
      return id;
    } else {
      var message = "Oh No! Nothing found! Check your spelling to be sure.",
        className = "warn";
      showAlert(message, className);
    }
  }
//Main event.
$("#search-btn").on("click", function () {
    var searchItem = $("#search-query").val().trim();
  
    setInLocalStorage(searchItem);
    geo.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
  
    $.ajax({
      url:
        "https://developers.zomato.com/api/v2.1/cuisines?lat=" 
        + lat +
        "&lon=" + lng +
        "&apikey=" + zamatoKey +"",
      method: "GET"
    }).then(function (cuisines) {
      
      var cuisineId = getCuisineId(cuisines, searchItem).toString();
  
      $.ajax({
        url: "https://developers.zomato.com/api/v2.1/search?lat=" 
        + lat +
        "&lon=" + lng +
        "&cuisines=" + cuisineId +
        "&apikey=" + zamatoKey +"",
        method: "GET"
      }).then(function (food) {
        var allRest = food.restaurants;
        
        getMarkers(allRest);
        paintResults(allRest);
      });
    });});
  // get cuisine id from zamato api with search text
function getCuisineId(data, searchItem) {
    var cuisines = data.cuisines,
      id;
  
    cuisines.forEach(function(cuisine) {
      var foodType = cuisine.cuisine.cuisine_name.toLowerCase(),
        idNum = cuisine.cuisine.cuisine_id;
      if (foodType == searchItem.toLowerCase()) {
        id = idNum;
      }
    });
    if (typeof id !== "undefined") {
      return id;
    } else {
      var message = "Oh No! Nothing found! Check your spelling to be sure.",
        className = "warn";
      showAlert(message, className);
    }
  }
})