const mongoose=require('mongoose');

//Here database is the name of the database we need t use
//These below lines create line with the database name and alos if connnection successfull then it will show then message as catch message
mongoose.connect("mongodb://localhost:27017/student",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> console.log("Connection Successfully")).catch((err)=>console.log(err));

//Schema: Defines structure of document
// By these schema we just validate our database i.e in key-value pair we need to tell type of value or default value, valdators etc..

const schema=new mongoose.Schema({
    Name:String,
    RollNo:{
        type:String,
        required:true
    },
    PhoneNo:Number,
    date:{
        type:Date,
        default:Date.now
    }
})

//Model
// For crud operations
//Collection Creation
const model=new mongoose.model("ClassA",schema);

//Insertion

const createDoc=async()=>{
  try{
    const s1=new model({
        Name:"Dhruvil",
        RollNo:"19BCE248",
        PhoneNo:987456321,
        
    })
    const s2=new model({
        Name:"Vatsal",
        RollNo:"19BCE248",
        PhoneNo:987456321,
        
    })
    const s3=new model({
        Name:"Balu",
        RollNo:"19BCE248",
        PhoneNo:987456321,
        
    })
    await model.insertMany([s1,s2,s3])
  }catch(err){
      console.log(err)
  }
}
// createDoc();

const getDoc= async() =>{
    const res=await model.find({Name:'Dhruvil'})
    console.log(res)
}
getDoc();


