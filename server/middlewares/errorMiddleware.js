export const errorMiddleWare = (err, req,res,next) => {

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.status || 500;
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}