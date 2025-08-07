




const dashboardController = (req,res)=>{
    const userInfo = req.userInfo
    res.json({
        message :`hi ${userInfo.username} welcome back`
    })
}
module.exports = dashboardController ;