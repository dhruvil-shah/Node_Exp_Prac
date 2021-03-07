var express=require('express');
var app=express();
//To get data from server
app.get("/",(req,res)=>{
  res.send("Welcome to Home Page");
})
app.listen(8000,()=>{
    console.log("Successfully Started")
})