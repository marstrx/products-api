require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./database/db");


app.use(express.json());


connectDb();

app.listen(process.env.PORT ,()=>{
    console.log("server is running on port ",process.env.PORT);
    
})