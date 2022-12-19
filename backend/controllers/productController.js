const Product=require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError")
//Creating the four CRUD operations

//Create Product => An Admin only Function
exports.createProduct=catchAsyncError(async(req,res,next)=>{
    const product=await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
});

//Get all products OR Read Products
exports.getAllProducts=catchAsyncError(async(req,res)=>{
    const products = await Product.find();

    res.status(201).json({
        success:true,
        products
    })
 
});

//Get a single product detail
exports.getProductDetails= catchAsyncError(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);

    if(!product)
    {
        return next(new ErrorHandler("Product Not Found",404));
    }

    res.status(200).json({
        sucesss:true,
        product
    })
});

//Update Product => Admin only Function
exports.updateProduct=catchAsyncError(async (req,res,next)=>{

    let product=await Product.findById(req.params.id);

    if(!product){
        {
            return next(new ErrorHandler("Product Not Found",404));
        }
            
        
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
new:true,
runValidators:true,
useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
});

//Delete Product => Admin Only Functon
exports.deleteProduct=catchAsyncError(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        {
            return next(new ErrorHandler("Product Not Found",404));
        }
}

await product.remove();

res.status(200).json({
    success:true,
    message:"Product Removed successfully"
})
});