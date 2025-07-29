require("dotenv").config();
const mongoose = require("mongoose");


const connectDb= async()=> {
    try {
        await mongoose.connect(process.env.dbLink);
        console.log("Mongodb connected successfully");
        
    } catch (err) {
        console.error("Connection failed ->", err);
        
    }
}

module.exports = connectDb;