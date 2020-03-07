// Requiring our models and passport as we've configured it
var db = require("../models");
var carInfo = require("../public/js/car.js")
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
    app.get("/api/cars/:vin", (req, res) => {
        Car.findOne({
            where: {
                vin: req.params.vin
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/cars/:make", (req, res) => {
        Car.findAll({
            where: {
                make: req.params.make
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/cars/:model", (req, res) => {
        Car.findAll({
            where: {
                model: req.params.model
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/cars/:year", (req, res) => {
        Car.findAll({
            where: {
                year: req.params.year
            }
        }).then(results => {
            res.json(results)
        });
    });

    app.get("/api/cars/:manufacturer", (req, res) => {
        Car.findAll({
            where: {
                manufacturer: req.params.manufacturer
            }
        }).then(results => {
            res.json(results)
        });
    });
}