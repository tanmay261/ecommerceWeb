const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"Cannot exceed 30 characters"],
        minLength:[5,"Name should have more than 4 characters"]
    }
,
    email:{
type:String,
required:[true,"Please enter your email"],
unique:[true,"Email already exists"],
validate:[validator.isEmail,"Enter valid email"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should have more than 7 characters"],
        // select is used to get the field (here :password) , when a GET route is called
        select:false
    },
    avatar:
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
      },
      role:{
        type:String,
        default:"user",
      }

      ,
      resetPasswordToken:String,
      resetPasswordExpire:Date,
});

module.exports=mongoose.model("User",userSchema);

