var db = require("../models");

module.exports = function(app) {

    // Create a new Image
    app.post("/api/images", function(req, res) {
        db.Image.create(req.body).then(function(dbImage) {
        res.json(dbImage);
        });
    });

    // Read all images - left outer joined to capsule
    app.get("/api/images", function(req, res) {
        var query = {};
        if (req.query.user_id) {
        query.Capsule = req.query.capsule_id;
        }
        
        db.Post.findAll({
        where: query,
        include: [db.Capsule]
        }).then(function(dbImage) {
        res.json(dbImage);
        });
    });

    // Update Image
    app.put("/api/images", function(req, res) {
        db.Image.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbImage) {
        res.json(dbImage);
        });
    });
    
    //Delete Image
    app.delete("/api/images/:id", function(req, res) {
        db.Image.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbImage) {
          res.json(dbImage);
        });
      });

};