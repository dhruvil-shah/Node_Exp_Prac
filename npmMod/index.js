//Firstly initialize npm
//chalk is basically used to have some decortion or highlights on text so that it becomes
//visible at the time of excution
//Mostly used in production
const chalk=require('chalk')
console.log(chalk.green.underline.inverse('hello'))

//Form validaton ---> validator
const validator=require('validator')
const res=validator.isEmail('dhr@gmail.com')
console.log(chalk.green(res))