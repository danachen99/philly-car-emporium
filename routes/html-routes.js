// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/index", function(req, res) {
        // This will be the home page for users and employees
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/carlist", function(req, res) {
        // This will be the page for customers to search and view inventory
        res.sendFile(path.join(__dirname, "../public/carlist.html"));
    });

    app.get("/login", function(req, res) {
        // if (req.user) {
        //     res.redirect("/inventory");
        // }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/inventory", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/inventory.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/inventory", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/signup"); //changed from /inventory
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

};