const app=require("./app");


const dotenv=require("dotenv");
//Config
dotenv.config({path:"backend/config/config.env"});

const connectDatabase = require("./config/database");

//Handling uncaught exception
process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to uncaught exception`);

    
        process.exit(1);
    
});

//Connecting to database
connectDatabase();


const server = app.listen(process.env.PORT,()=>{
  
console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


//Unhandled Promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
});
