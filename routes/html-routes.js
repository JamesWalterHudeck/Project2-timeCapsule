// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
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
};