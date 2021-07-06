const express=require('express');
const app=express();
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const router=require('./router/api');

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("err: "+err);
  
})


// app.use('/',router);


app.listen(4200,()=>{
    console.log("listen in port 4200");
})