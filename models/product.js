const mongoose = require("mongoose");



const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [10, "Title must be at least 10 characters"],
        maxlength: [200, "Title must be less than 200 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [20, "Description must be at least 20 characters"],
        maxlength: [300, "Description must be less than 300 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"]
    }
});



module.exports = mongoose.model("Product", productsSchema);