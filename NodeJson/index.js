const fs=require('fs')
const bioData={
name:"Shah Dhruvil",
age:18,
place:"Surat"
}
 //Use for conversion of object into json type data where key also has double quotes

//  const jsonData=JSON.stringify(bioData);
// console.log(jsonData)
//We can't do jsonData.name It will give error

//Converts Json to object

// const data=JSON.parse(jsonData)
// console.log(data)


// Task
// 1)convert to JSON
// 2)Write on File
// 3)Read From File
// 4)Convert into object form


const jsonData=JSON.stringify(bioData)
fs.writeFile('json1.json',jsonData,(err)=>{
 console.log('Done Successfully')
})
fs.readFile('json1.json',(err,data)=>{
      x=JSON.parse(data)
     console.log(x)
})