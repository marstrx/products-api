const express = require("express");
const uploadFileRoutes = express.Router();
const uploadMiddleware = require("../middleware/upload-middleware");




uploadFileRoutes.post("/upload", uploadMiddleware.single("image"), (req, res) => {
    res.json({
        success: true,
        file: req.file
    });
});



module.exports = uploadFileRoutes;