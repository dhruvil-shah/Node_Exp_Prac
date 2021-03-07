//req---> Used to know which request is being needed for the user to be done
// res(response)---> Whenever request is hitted the server need to give response which is handled by server

const fs=require('fs')

//So basically listen method will tell the server which request to be served off when particulae
// port number with the hostname is hitted

//You can use 
//res.end() || res.write('Home') and then res.end()
//First one is more convinient
const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url=='/')
  res.end('Home');   
  else if(req.url=='/Contact')
  res.end('Contact');   
  else if(req.url=='/AboutUs')
  res.end('About Us');
  else if(req.url=='/UserApi')
  {
  res.writeHead(200,{"Content-type":"application/json"})
  fs.readFile('./UserApi/userapi.json',"utf-8",(err,data)=>{
  const obj=JSON.parse(data)
  console.log(obj.data)
  res.end(data)
  })
  }
  else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>Nothing found</h1>");
  }   
});
server.listen(8000,'127.0.0.1',()=>{
  console.log('Listening to 8000')
})