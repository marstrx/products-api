const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    username :{
        type :String,
        required :true,
        unique :true,
        trim:true,
        maxlength :[20,"username is too long"],

    },
    email:{
        type :String,
        required :true,
        unique :true,
        trim:true,
        lowercase: true,
    },
    password:{
        type:String,
        required :true,
        trim:true,

    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
},{timestamps :true});

module.exports = mongoose.model("User" ,userSchema);