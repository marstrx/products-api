const dashboardController = require("../controllers/dashboard-controller");
const express = require("express");
const dashboardRouter = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");


dashboardRouter.get("/welcome",authMiddleware ,adminMiddleware ,dashboardController);


module.exports = dashboardRouter ;