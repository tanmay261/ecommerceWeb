const ErrorHandler = require("../utils/errorHandler");

module.exports=(err,req,res,next)=>{

    err.statusCode= err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        
        success:false,
        //can use message:err.stack , if we want complete error details , instead of just error code
        error:err.stack 
        
    });
};