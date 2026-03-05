
function sayMyname(){
    console.log("H");
    console.log("U");
    console.log("K");
    console.log("U");
    console.log("M");

}

// sayMyname()

// function sum(number1, number2){ //parameters when we assign name like in this (number1, number2)
//     console.log(number1+number2);
    
// }


function sum(number1, number2){ //parameters when we assign name like in this (number1, number2)
    // let result = number1 + number2
    // return result .......//result is the last executable code of function 
    return number1 + number2
}


const result = sum(78, 45) //arguments , when we give value while calling function

// console.log("result:", result);
//expected output -> result: undefined until we define the return in function

function logInUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return // if no username loop start, this return will stop the function further by return nothing
    }
    return `${username} just logged in`
    // return Doesn't ENSURE that the value will be printed 
    // it just returns the value , hence no OUTPUT
}

logInUserMessage("Hukum")
// otpit -> Hukum just logged in

//NOW IT WILL GIVE OUTPUT
console.log(logInUserMessage("Hukum"));

// console.log(logInUserMessage());
//no argument passed will give undefined


// HANDLING MULTIPLE PARAMETERS (CART Problem)
// function calculate_cart_price(...num1){ // (____Rest operator___)...num1 helps to pass multiple parameters to function
function calculate_cart_price(val1, val2, ...num1){
    return num1 // rest operator makes an array of the multiple values
}

// console.log(calculate_cart_price(200, 400, 500, 890, 6768));
// expected output -> [ 500, 890, 6768 ] val1, and val2 has been assigned the first two values and num1 array collect all other 

const user = {
    username: 'Hukum',
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and Price is ${anyObject.price}`);
    
}

// handleObject(user)
// handleObject(
//     {
//         username : "ALex",
//         price : 9890
//     }
// )
const myNewArray = [200, 400, 5999]


function secondValue(getArray){
    return getArray[1]
}

console.log(secondValue(myNewArray));