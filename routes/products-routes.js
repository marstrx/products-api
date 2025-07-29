const express = require("express");
const {getAllProducts,AddNewProduct} = require("../controllers/product-controller");


const router = express.Router();


router.get("/get" , getAllProducts);
router.post("/add" ,AddNewProduct);


module.exports = router ;