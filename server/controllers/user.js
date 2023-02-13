export const myProfiles =(req, res, next) =>{

 res.status(200).json({
    success: true,
    user:req.user
 })

};

export const logout=(req,res,next)=>{

    req.session.destroy((err)=>{
        if(err)
        {
            return next(err)
        }
        res.clearCookie("PRANKUSH_COOKIE")
        res.status(200).json({
            message:"Logged Out"
        })
    })

}