// ********Primitive daratypes**********
//these are the datatypes which are passed by values and not passed by reference
//7 types => strings,Number , Boolean, null,undefined,Symbol(it is used to make a variable unique),Bigint
const score =  100 // both are nunbers and not like int or float
const number =  100.3

const isloggedin = false // Boolean
const empty = null// object datatype
let username // undefined

const id  = Symbol('123')
const seconid  = Symbol('123')
console.log(id === seconid); // not equal


const bignumber = 24645546687n // as we put n at last it becomes Bigint




// ********Non -Primitive daratypes**********
// these are passed by reference and these are => Arrays,Objects,Functions

const heroes = ["doremon","shinchan","ninja hattori"]; //array and its datatype is object
let myObject  =
{
    name:"Kartik Kharodh",
    age:18
}//this is an object

const myFunc = function(){
    console.log("Hello world");
}//this is an function


myFunc()
console.log(typeof id) // its datatype is Symbol

//*****************************************************************************************

//Stack vs Heap

//when we talk about Primitive datatypes stack is used 
// and Heap is used for Non-Primitive datatypes


let userone = "Kartik Kharodh"
let usertwo = userone
usertwo = "Kharodh Kartik"
console.log(userone);
console.log(usertwo);
// since in above usertwo variable copy of userone is passed therefore changes in usertwo will not
// be applied tot userone

let obj1 = 
{
    email:"Kartikkharodh@gamil.com",
    mobile :1234
}

let obj2 = obj1
obj2.email = "Rajnikant@gmail.com"
console.log(obj1.email)
console.log(obj2.email)
//since heap memory is used my the object therefore its reference has been passed to obj2 and hence
//changes in obj2 has been shown to obj1 