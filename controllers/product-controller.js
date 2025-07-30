const Product = require("../models/product");

// fetch all products
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

//  add new product
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

//  fetch single product by id
const getSingleProductById = async(req,res)=>{
    try {
        const productId = req.params.id ;
        const fetchProduct = await Product.findById(productId);
        if(fetchProduct){
            res.status(200).json({
                success:true,
                message :"product fetched successfully",
                data : fetchProduct
            })
        }else{
            res.status(404).json({
                success:false,
                message :"product not found"
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


const updateSingleProductById = async(req,res)=>{
    try {
        const productId = req.params.id ;
        const updateData = req.body ;
        const updateProduct = await Product.findByIdAndUpdate(productId ,updateData ,{new :true})
        if(updateProduct){
            res.status(200).json({
                success :true,
                message :"product updated successfully",
                updateProduct
            })
        }else{
            res.status(404).json({
                success:false,
                message :"no data provided"
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

// delete one product by id
const deleteSingleProductById = async(req,res)=>{
    try {
        const productId = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(productId);
        if(deleteProduct){
            res.status(200).json({
                success :true,
                message:"product deleted successfully",
                data :deleteProduct
            })
        }else{
            res.status(404).json({
                success :false,
                message:"product not found"
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


module.exports = {
    getAllProducts,
    AddNewProduct,
    getSingleProductById,
    deleteSingleProductById,
    updateSingleProductById
}