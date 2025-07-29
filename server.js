require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./database/db");
const productRouter = require("./routes/products-routes");

app.use(express.json());


connectDb();

app.use("/api/products" ,productRouter);

app.listen(process.env.PORT ,()=>{
    console.log("server is running on port ",process.env.PORT);
    
})