const express = require(express);
const authRoutes = express.Router();



authRoutes.post("/register");
authRoutes.post("/login");


module.exports= authRoutes ;