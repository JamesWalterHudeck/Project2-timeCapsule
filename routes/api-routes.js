var db = require("../models");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var uploadController = require("./upload")

module.exports = function(app) {
    //POST = ADD = CREATE
    // =============================================================

    //ADD CAPSULES
    app.post("/api/capsules", function(req, res) {
        db.Capsule.create(req.body).then(function(dbCapsule) {
            res.json(dbCapsule);
        });
    });

    //ADD FILES
    app.post('/api/files/v2', upload.single('myFile'), uploadController);


    //ADD USERS
    app.post("/api/users", function(req, res) {
        db.Author.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // GET = FIND = READ
    // =============================================================

    //FIND CAPSULES - DONT THINK WE WILL NEED THIS
    app.get("/api/capsules", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }

        db.Post.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbCapsule) {
            res.json(dbCapsule);
        });
    });

    //FIND SPECIFIC CAPSULE
    app.get("/api/capsules/:id", function(req, res) {

        db.Capsule.findOne({
            where: {
                id: req.params.id
            },
            include: [db.file]
        }).then(function(dbCapsule) {
            res.json(dbCapsule);
        });
    });

    //FIND SPECIFIC USER
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

    // PUT = UPDATE
    // =============================================================

    //UPDATE SPECIFIC CAPSULE
    app.put("/api/capsules/:id", function(req, res) {
        db.Capsule.update({
            where: {
                id: req.params.id
            }
        }).then(function(dbCapsule) {
            res.json(dbCapsule);
        });
    });

    // DELETE = DELETE
    // =============================================================

    //DELETE SPECIFIC CAPSULE
    app.delete("/api/capsules/:id", function(req, res) {
        db.Capsule.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCapsule) {
            res.json(dbCapsule);
        });
    });
    //DELETE SPECIFIC USER
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