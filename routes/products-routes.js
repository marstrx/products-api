const express = require("express");
const { getAllProducts,
        AddNewProduct ,
        getSingleProductById ,
        deleteSingleProductById
} = require("../controllers/product-controller");


const router = express.Router();


router.get("/get" , getAllProducts);
router.post("/add" ,AddNewProduct);
router.get("/get/:id" , getSingleProductById);
router.delete("/delete/:id" , deleteSingleProductById);

 
module.exports = router ; 