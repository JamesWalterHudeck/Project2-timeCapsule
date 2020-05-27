var db = require("../models");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

module.exports = function(app) {

    app.post('/api/files', upload.single('myFile'), function(req, res, next) {
        console.log(req.file);
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
    })

    // app.post('/api/filez', upload.array('photos', 12), function(req, res, next) {
    //     console.log(req);
    //     // req.files is array of `photos` files
    //     // req.body will contain the text fields, if there were any
    // })

    // var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
    // app.post('/cool-profile', cpUpload, function(req, res, next) {
    //     // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //     //
    //     // e.g.
    //     //  req.files['avatar'][0] -> File
    //     //  req.files['gallery'] -> Array
    //     //
    //     // req.body will contain the text fields, if there were any
    // })

};