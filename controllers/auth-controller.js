const User = require("../models/user");
const bcrypt = require("bcryptjs");

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

const loginController = async =(req,res)=>{
     try {
        
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