var db = require("../models");

module.exports = function(app) {
    // New user
    app.post("/api/users", function(req, res) {
        db.Author.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // Select user
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Capsule]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // Delete user
    app.delete("api.users/:id", function(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

};