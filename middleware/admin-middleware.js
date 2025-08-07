



const adminMiddleware = (req,res,next)=>{
    const userInfo = req.userInfo
    if(userInfo.role == "admin"){
        next()
    }else{
        res.status(401).json({
            success :false,
            message :"you cannot access this page"
        });
    }
    
    

}
module.exports = adminMiddleware ;