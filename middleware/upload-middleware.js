const { error } = require("console");
const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({
    destination :function(req,file,cb){
        cb(null,"uploads");
    },
    filename:function(req,file,cb){
        const randmName = Date.now() + path.extname(file.originalname);
        cb(null ,file.fieldname + "-" + randmName);
    }
});


//  file filter

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === "image/png"){
        cb(null,true)
    }else{
        cb(new Error("only images with png type acceptable"));
    }
}



// create the middleware
const uploadMiddleware = multer({
    storage:storage,
    fileFilter :fileFilter,
    limits :{ fileSize: 5 * 1024 * 1024 }
});


module.exports = uploadMiddleware ;
