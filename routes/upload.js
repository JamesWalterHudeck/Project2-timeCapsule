const fs = require("fs");
const path = require("path");
const db = require("../models");
const Image = db.Images;

const uploadFiles = async(req, res, next) => {
    try {
        console.log(req.file);

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
            console.log(image)
                // fs.writeFileSync(
                //     __basedir + "/resources/static/assets/tmp/" + image.name,
                //     image.data
                // );

            return res.send(`File has been uploaded.`);
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
};

module.exports = uploadFiles