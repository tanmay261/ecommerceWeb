const app=require("./app");


const dotenv=require("dotenv");
//Config
dotenv.config({path:"backend/config/config.env"});

const connectDatabase = require("./config/database");



//Connecting to database
connectDatabase();


app.listen(process.env.PORT,()=>{
  
console.log(`Server is working on http://localhost:${process.env.PORT}`)
})