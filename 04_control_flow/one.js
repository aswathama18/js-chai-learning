// if 
const isuserLoggedIn  = true
const temperature = 48
// if (temperature < 40) {
//     console.log("temperature is okay");
// }else{
//     console.log("temperature is high");
//     }

// console.log("executed");

const score = 200

// if (score > 100) {
//     const power = "fly" //variables declared in this scope won't be accessed by outside 
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);
// OUTPUT -> ReferenceError: power is not defined


// if (score > 100) {
//     var power = "fly" //var scope is global , hence it can be accessed by anyone from outside
//     console.log(`user power : ${power}`);
// }

//var is global that's why it can be accessed by outside variable
// console.log(`user power : ${power}`);
// OUTPUT ->user power : fly

// const balance = 1000

// if (balance >500) console.log("test"); //implicit scope

const userLoggedIn = true
const DebitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true 
 if (userLoggedIn && DebitCard) {
    console.log("Allow to buy course");
        
 }
 if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("user logged in");
    
 } 
 else {
    console.log("you must have a credit card and logged in");
    
 }