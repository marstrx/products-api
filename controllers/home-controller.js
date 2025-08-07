

const homeController = async(req,res)=>{
    res.json({
        message:"welcome to home page",
        user:{
            username :req.userInfo.username,
            email :req.userInfo.email,
            role :req.userInfo.role
        }
    })
}


module.exports = homeController ;