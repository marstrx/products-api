const express = require("express");
const homeController = require("../controllers/home-controller");
const homeRouter = express.Router();
const authMiddleware = require("../middleware/auth-middleware");


homeRouter.get("/welcome" ,authMiddleware,homeController);

module.exports = homeRouter ; 