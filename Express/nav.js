//Challgenge 
//Create a navigation website using express with different web pages
var express=require('express');
var app=express();
app.get("/",(req,res)=>{
res.send('Home')
})
app.get('/about',(req,res)=>{
res.send('About Page')
})
app.get('/contact',(req,res)=>{
res.status(200).send('Conatct Us')
})
app.listen(8000,()=>
{
    console.log("Successfully Started")
})