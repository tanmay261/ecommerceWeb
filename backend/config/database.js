const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, 
        useUnifiedTopology: true,}).then((data)=>
    {
        console.log(`Connected to MongoDB with host ${data.connection.host} `);
    }).catch((err)=>{
    console.log(err)
    })
}

module.exports = connectDatabase