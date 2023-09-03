const Product=require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const User= require("../models/userModel");
const catchAsyncError = require("../middleware/catchAsyncError");

// Registering a new user
exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const {name,email,password}=req.body;

    const user=await User.create({
        name,email,password,
        avatar:{
            public_id:"This is a sample id",
            url:"profilePicUrl"
        }
    });
const token = user.getJWTToken();
    res.status(201).json({
        success:true,
    token,
    });
})


//Login User
exports.loginUSer=catchAsyncError(async(req,res,next)=>{
    const{email,password}=req.body;

    //checking if user has given email and password both

    if(!email || !password){
        return next(new ErrorHandler(`Please enter both email and password`,400));
    }

    const user=await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler(`Invalid email or password combo`,401));
    }

    const isPasswordMatched=user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler(`Invalid email or password combo`,401));
    }

    const token=user.getJWTToken();

    res.status(201).json({
        success:true,
        token,
    })
});
