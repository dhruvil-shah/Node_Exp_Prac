var express=require('express');
var app=express();
var path=require('path');
const staticPath=path.join(__dirname,"../public");
app.set("view engine","hbs")
const requests=require('requests')

//Use only when need to change view folder name
// app.set("views",pathToDirectory where newName is used instead of views)



// app.use(express.static(staticPath))


//Dynamic data send through template engine
app.get("/",(req,res)=>{
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=49880dd522b603b7573af5dfc0664d5b`)
    .on('data',  (chunk) =>{
    const objData=JSON.parse(chunk)
    //Converting into array of objects
    const arrData=[objData]
    // res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(arrData[0].name+arrData[0].main.temp)
    // res.end(realTimeData)
    })
    .on('end',(err) =>{
      if (err) 
      return console.log('connection closed due to errors', err);  
      res.end()
    });
})
    //Due to above code these will not get executed
app.get("/",(req,res)=>{
res.send('Home')
})

//For Error Page where star acts like else in if else ladder
app.get('*',(req,res)=>{
res.render('err')
})
app.listen(8000,()=>
{
    console.log("Successfully Started")
})