let db = require("../models");
let carImage = require("../public/js/img.js");

module.exports = function(app) {
    // CREATE/POST route for saving a new image
    app.post("/api/images", function(req, res) {
        carImage(req.body.vin).then(data => {
            db.Image.create(data).then(dbImage => res.json(dbImage));
            //res.status(204).end()
        });
    });

    // GET route for getting all of the images
    app.get("/api/images/all", function(req, res) {
        db.Image.findAll({}).then(results => {
            res.json(results)
            results.forEach(image => {
                return image;
            });
        })
    });

    // Get route for retrieving a single image
    // app.get("/api/images/:id", function(req, res) {
    //     // 2. Add a join here to include the Author who wrote the Post
    //     db.Image.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbImage) {
    //         console.log(dbImage);
    //         res.json(dbImage);
    //     });
    // });



};