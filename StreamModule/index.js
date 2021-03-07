  //Stream module helps to load data timely wise like youtube video running
  
  const fs=require('fs')
  const http=require('http');
  fs.writeFileSync('input.txt',"Hello Dhruvil Here")
  const server=http.createServer();
  server.on('request',(req,res)=>{
    //   fs.readFile('input.txt',(err,data)=>{
    //       res.end(data.toString())
    //   })
        const rstream=fs.createReadStream('input.txt')
        //Here data is event because we need to read data
        //chunkdata means line by line
        // rstream.on('data',(chunkdata)=>
        // {
        // res.write(chunkdata);
        // })
        // //As soon as data is read then we need to call end event
        // rstream.on('end',()=>{
        //     res.end();
        // })
        // rstream.on('error',(err)=>{
        //    res.end("No File Found")
        // })






        //One liner for above all listener
        rstream.pipe(res)
  })
  server.listen(8000,'127.0.0.1',()=>
  {
      console.log('Successfully Running')
  })