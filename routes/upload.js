const fs = require("fs");
const path = require("path");
const db = require("../models");

const uploadFiles = async(req, res, next) => {
    try {
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        db.Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                path.join(__dirname, "../uploads/" + req.file.filename)
            ),
        }).then((image) => {
            return res.redirect("/capsuleBuilder?upload=success");
        });
    } catch (error) {
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = uploadFiles