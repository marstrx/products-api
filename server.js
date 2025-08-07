require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./database/db");
const productRouter = require("./routes/products-routes");
const authRoutes = require("./routes/auth-routes");
const homeRouter = require("./routes/home-routes");


app.use(express.json());


connectDb();

// products routes
app.use("/api/products" ,productRouter);

// auth routes
app.use("/api/auth" , authRoutes);
// home route
app.use("/api/home" ,homeRouter);

app.listen(process.env.PORT ,()=>{
    console.log("server is running on port ",process.env.PORT);
    
})  