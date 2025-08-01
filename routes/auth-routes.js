const express = require("express");
const authRoutes = express.Router();
const {
    registerController,
    loginController
} = require("../controllers/auth-controller");



authRoutes.post("/register" , registerController);
// authRoutes.post("/login");


module.exports= authRoutes ;