const user = {
    username : "hukum",
    price : 1000,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //here 'this' is refering to the current object
        
    }

}
// user.welcomeMessage()
// user.username = "Nikhil" //context of username has been changed 
// user.welcomeMessage()

// console.log(this); //here this indicates the environment 

// function coffe(){
//     let username = "Hukum"
//     console.log(this.username); //`this` wont work in functions , only works in objects
    
// }
// coffe()
// output -> undefined

// const chai = function(){
//     let username = "Hukum"
//     console.log(this.username);
// }
// chai() 
// output -> undefined


const chai =() => {
    let username = "Hukum"
    console.log(this);
}


// chai() 

// ARROW FUCNTION

// const addTWo = (num1, num2) => {                //basic Arrow Function
//     return num1 + num2                          // when use curly braces, must use `return` keyword
// }

// console.log(addTWo(3,4));


// const addTWo = (num1, num2) =>  num1 + num2                //Implicit arrow function 
// const addTWo = (num1, num2) =>  (num1 + num2 )             // doesn't need return keyword in parantheses
// const addTWo = (num1, num2) =>  ({username : "Hukum"})        //even to return an object in Implcit arrow function u must use parantheses 


console.log(addTWo(3,4));
