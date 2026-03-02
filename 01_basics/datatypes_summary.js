// primitive data types

// 7 types : String , Number , Boolean , null, undefined, Symbol , BigInt

// JavaScript is Dynamically typed language


const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id != anotherId);

// Reference Type = (Non primitive)

//Array , Objects, Funvtions 

const heroes = ["shaktiman", "nagraj", "Doga"];
let myObj = {
    name: "Hitesh",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof( anotherId));
//https://262.ecma-international.org/5.1/#sec-11.4.3

// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".


//+++++++++++++++++++++++++++++++  MEMORY  +++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitive)
// in stack you will get a copy of stored data, 
// Heap (Non-primitive)
//in Heap memory you'll get the reference value of the stored data

let myYoutubeName = "hukumchaudhary"

let anotherName = myYoutubeName
anotherName = "jaiho"

console.log(myYoutubeName); //output was the first value's copy , given to stack
console.log(anotherName); //newly stacked value over the previous one in stack
// CONCLUSION -> any change in copy value won't change the original value

let user_01 = {
    email : "abc@gmail.com",
    upi : "123890@pnb"
}
let user_02 = user_01 // by non-primitive data type like object we are passing the data into Heap Memory,
// which eventually will provide the reference of stored data , if we assign that object to new object

user_02.email = "Nikhil@google.com"


console.log(user_01.email); //output-> Nikhil@google.com 
console.log(user_02.email); //output-> Nikhil@google.com

//CONCLUSION -> any changes done in new variable , will eventually be done in the original value 