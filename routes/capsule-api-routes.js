var db = require("../models");

module.exports = function(app) {

    // Create a new Capsule
    app.post("/api/capsules", function(req, res) {
        db.Capsule.create(req.body).then(function(dbCapsule) {
        res.json(dbCapsule);
        });
    });

    // Read all capsules - left outer joined to user
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

    // Read one capsule - left outer joined to image
    app.get("/api/capsules/:id", function(req, res) {
        
        db.Capsule.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Image]
        }).then(function(dbCapsule) {
        res.json(dbCapsule);
        });
    });
    
    // Update Capsule
    app.put("/api/capsules", function(req, res) {
        db.Capsule.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbCapsule) {
        res.json(dbCapsule);
        });
    });
    
    //Delete Capsule
    app.delete("/api/capsules/:id", function(req, res) {
        db.Capsule.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbCapsule) {
          res.json(dbCapsule);
        });
      });

};