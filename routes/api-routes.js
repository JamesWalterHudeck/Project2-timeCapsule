var db = require("../models");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const axios = require("axios");
var uploadController = require("./upload");

module.exports = function(app) {
    //POST = ADD = CREATE
    // =============================================================

    //ADD CAPSULE
    app.post("/api/saveCapsule", function(req, res) {
        db.Capsule.create(req.body).then(function(dbCapsule) {
            res.json(dbCapsule);
        });
    });

    //ADD FILES
    app.post("/api/files/v2", upload.single("myFile"), uploadController);

    //ADD USERS
    app.post("/api/users", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //Add Movies
    app.post("/api/capsules/movies", async function(req, res, next) {
        try {
            let movie = req.body.movieInput;
            const apiKey = "9b13178f";
            let queryURL =
                "https://www.omdbapi.com/?t=" + movie + "&apikey=" + apiKey;

            const result = await axios.get(queryURL);
            const movieTitle = result.data.Title;
            const moviePoster = result.data.Poster;
            const newMovie = {
                movieTitle: movieTitle,
                moviePoster: moviePoster,
                CapsuleId: 1,
            };
            const dbPoster = await db.Movies.create(newMovie);
            res.redirect("/capsuleBuilder");
        } catch (error) {
            next(error);
        }
    });

    //FUTURE TODOS
    // =============================================================

    // GET = FIND = READ
    // =============================================================
    //FIND CAPSULES - DONT THINK WE WILL NEED THIS
    // app.get("/api/capsules", function(req, res) {
    //     var query = {};
    //     if (req.query.user_id) {
    //         query.UserId = req.query.user_id;
    //     }

    //     db.Post.findAll({
    //         where: query,
    //         include: [db.User],
    //     }).then(function(dbCapsule) {
    //         res.json(dbCapsule);
    //     });
    // });

    //FIND SPECIFIC CAPSULE
    // app.get("/api/capsules/:id", function(req, res) {
    //     db.Capsule.findOne({
    //         where: {
    //             id: req.params.id,
    //         },
    //         include: [db.file],
    //     }).then(function(dbCapsule) {
    //         res.json(dbCapsule);
    //     });
    // });

    //FIND SPECIFIC USER
    // app.get("/api/users/:id", function(req, res) {
    //     db.User.findOne({
    //         where: {
    //             id: req.params.id,
    //         },
    //         include: [db.Capsule],
    //     }).then(function(dbUser) {
    //         res.json(dbUser);
    //     });
    // });

    // PUT = UPDATE
    // =============================================================

    //UPDATE SPECIFIC CAPSULE
    // app.put("/api/capsules/:id", function(req, res) {
    //     db.Capsule.update({
    //         where: {
    //             id: req.params.id,
    //         },
    //     }).then(function(dbCapsule) {
    //         res.json(dbCapsule);
    //     });
    // // });

    // // DELETE = DELETE
    // // =============================================================

    // //DELETE SPsECIFIC CAPSULE
    // app.delete("/api/capsules/:id", function(req, res) {
    //     db.Capsule.destroy({
    //         where: {
    //             id: req.params.id,
    //         },
    //     }).then(function(dbCapsule) {
    //         res.json(dbCapsule);
    //     });
    // });
    // //DELETE SPECIFIC USER
    // app.delete("api.users/:id", function(req, res) {
    //     db.User.destroy({
    //         where: {
    //             id: req.params.id,
    //         },
    //     }).then(function(dbUser) {
    //         res.json(dbUser);
    //     });
    // });
};