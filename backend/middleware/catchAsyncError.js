module.exports= TryCatchFunc => (req,res,next)=>{
Promise.resolve(TryCatchFunc(req,res,next)).catch(next);
}