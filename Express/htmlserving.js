var express=require('express');
var app=express();
app.get("/",(req,res)=>{
    res.write('<h1> Welcome to Home Page</h1>')
res.send()
})
app.get("/about",(req,res)=>{
    //Directly Converts into Json format
    res.send({
        id:1,
        name:'Dhruvil'
    });
    //Here we can also use res.json
res.send()
})

app.listen(8000,()=>
{
    console.log("Successfully Started")
})