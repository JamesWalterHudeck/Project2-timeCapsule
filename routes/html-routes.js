// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
    //var capsule = require("../models/capsule.js");

    // index route loads view.html
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/login", function(req, res) {
        res.render("login");
    });

    app.get("/capsule", function(req, res) {
        res.render("capsule");
    });

    app.get("/capsuleBuilder", function(req, res) {
        res.render("capsuleBuilder");
    });

    // blog route loads blog.html
    // app.get("/blog", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/blog.html"));
    // });

    // app.get("/authors", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    // });
};