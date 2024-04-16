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