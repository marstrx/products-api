const Product = require("../models/product");


const getAllProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        if(products.length >0){
            res.status(200).json({
                success :true,
                message :"All Products fetched successfully",
                data : products
            })
        }else{
            res.status(404).json({
                success :false,
                message :"No product found"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success :false,
            message :"Something went wrong"
        })
        
    }
}


const AddNewProduct = async(req,res)=>{
    try {
        const newProduct = req.body;
        if(!newProduct){
            res.status(404).json({
                success :false,
                message :"No Product Data Provided"
            })
        }else{
            await Product.create(newProduct);
            res.status(201).json({
                success :true,
                message :"Product added successfully",
                data : newProduct
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success :false,
            message :"Something went wrong"
        })
    }
}


const getSingleProductById = async(req,res)=>{
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success :false,
            message :"Something went wrong"
        })
    }
}


const updateSingleProductById = async(req,res)=>{
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success :false,
            message :"Something went wrong"
        })
    }
}


const deleteSingleProductById = async(req,res)=>{
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success :false,
            message :"Something went wrong"
        })
    }
}


module.exports = {
    getAllProducts,
    AddNewProduct
}