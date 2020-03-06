// Requiring our models and passport as we've configured it
var db = require("../models");
var carInfo = require("../public/js/car.js")
const vin = "5XXGN4A70CG022862";
module.exports = (app) => {
    app.post("/api/cars", function(req, res) {
        // Add sequelize code for creating a post using req.body,
        // then return the result using res.json

        carInfo(vin).then(data => {
            console.log(data)
            db.Car.create(data).then(dbCar => res.json(dbCar));

        });

    });
}