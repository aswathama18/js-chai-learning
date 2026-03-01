// primitive data types

// 7 types : String , Number , Boolean , null, undefined, Symbol , BigInt

// JavaScript is Dynamically typed language


const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id != anotherId);

// Reference Type = (Non primitive)

//Array , Objects, Funvtions 

const heroes = ["shaktiman", "nagraj", "Doga"];
let myObj = {
    name: "Hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof( anotherId));
//https://262.ecma-international.org/5.1/#sec-11.4.3

// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".