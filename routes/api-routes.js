// var db = require("../models");

// module.exports = function(app) {
//   app.get(

//   app.get(

//   app.post(

//   app.delete(

// };

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    //CREATE READ UPDATE DELETE

    // GET route for getting all of the posts
    // GET = FIND = READ
    app.get("/api/table", function(req, res) {
        var query = {};
        if (req.query.author_id) {
            query.AuthorId = req.query.author_id;
        }
        db.Post.findAll({
            where: query
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // POST route for saving a new post
    //POST = ADD = CREATE
    app.post("/api/posts", function(req, res) {
        db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });
    app.post("/api/files", function(req, res) {
        db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // DELETE route for deleting posts
    // DELETE = DELETE
    app.delete("/api/posts/:id", function(req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // PUT route for updating posts
    // PUT = UPDATE
    app.put("/api/posts", function(req, res) {
        db.Post.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};