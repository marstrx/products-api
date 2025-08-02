const User = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerController = async (req,res)=>{
    try {
        const {username,email,password, role} = req.body;
        // check if the username or email are exists
        const userExist = await User.findOne({$or:[{username},{email}]});
        if(userExist){
            return res.status(404).json({
                success:false,
                message:"this user is already exists try to login instead"
            })
        }

        //  hash password befor storing it in bd
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // add user to db after hashing
        const newlyUser = await new User({
            username,
            email,
            password :hashedPassword,
            role :role || "user"
        });
        await newlyUser.save();

        // check if the user created successfully
        if(newlyUser){
            res.status(201).json({
                success :true,
                message :"user created successfully"
            })
        }else{
            res.status(404).json({
                success :false,
                message :"user not created"
            })
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message :"Somthing went wrong please try later"
        })
        
    }
}

const loginController = async(req,res)=>{
     try {
        const {email ,password} = req.body;
        // check if the user exists in dbs
        const isExists = await User.findOne({email});

        if(!isExists){
             res.status(404).json({
                success :false,
                message :"this user not found 404"
            })
        }
        // check if the password is match
        const isMatch =await bcrypt.compare(password ,isExists.password);
        if(!isMatch){
             res.status(401).json({
                success :false,
                message :"invalid password"
            })
        }

        // create access token
        const accessToken = jwt.sign({
            userId : isExists._id,
            username :isExists.username,
            email :isExists.email,
            role :isExists.role
        },process.env.JWT_SECRET_CODE,{
            expiresIn :"30m"
        })

        res.status(200).json({
            success :true,
            message :`hi ${isExists.username} welcome back`,
            ip: req.ip,
            device :req.headers["user-agent"],
            accessToken
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message :"Somthing went wrong please try later"
        })
        
    }
}


module.exports ={
    registerController,
    loginController
}