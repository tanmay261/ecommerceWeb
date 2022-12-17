const Product=require("../models/productModel");

//Creating the four CRUD operations

//Create Product => An Admin only Function
exports.createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Get all products OR Read Products
exports.getAllProducts=async(req,res)=>{
    const products = await Product.find();

    res.status(201).json({
        success:true,
        products
    })
 
}

//Get a single product detail
exports.getProductDetails= async(req,res,next)=>{
    const product=await Product.findById(req.params.id);

    if(!product)
    {
        res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(200).json({
        sucesss:true,
        product
    })
}

//Update Product => Admin only Function
exports.updateProduct=async (req,res,next)=>{

    let product=await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
            
        
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
}

//Delete Product => Admin Only Functon
exports.deleteProduct=async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
}

await product.remove();

res.status(200).json({
    success:true,
    message:"Product Removed successfully"
})
}