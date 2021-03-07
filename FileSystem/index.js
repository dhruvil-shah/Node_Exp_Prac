const fs=require('fs')


// Synchronous

// // fs.writeFileSync('data.txt',"Hello Dhruvil there!!")
// let d=fs.readFileSync('data.txt','utf-8')
// fs.appendFileSync('data.txt',"How are you?")
// let d1=fs.readFileSync('data.txt','utf-8')
// console.log(d)
// console.log(d1)


// Asynchronous 

// callback are necessary because after execution compiler doesn't know now what to 
//do after execution

// fs.writeFile('data.txt',"Hello how are you?",(err)=>{
// console.log(err)
// })
// fs.readFile('data.txt','utf-8',(err,data)=>{
// console.log(data)
// })