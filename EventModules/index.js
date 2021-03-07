//Here the module returns class insted of object 
//So we need to make object of it

const EventEmitter=require('events');
const event=new EventEmitter();
 
//Listener to our event only run onced when called
// event.on('sayName',()=>
// {
//     console.log("Hello Dhruvil Here!!")
// })
//More than once we can call the same event
event.on('sayName',(a)=>
{
    console.log(a);
    console.log("Hello Dhruvil Here second time!!")
})
//Own event name sayName
// event.emit('sayName');
//With Parameters
event.emit('sayName','Hello')