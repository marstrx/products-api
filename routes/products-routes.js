const express = require("express");
const {getAllProducts,AddNewProduct ,getSingleProductById} = require("../controllers/product-controller");


const router = express.Router();


router.get("/get" , getAllProducts);
router.post("/add" ,AddNewProduct);
router.get("/get/:id" , getSingleProductById);

 
module.exports = router ; 