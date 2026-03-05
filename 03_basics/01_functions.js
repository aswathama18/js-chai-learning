
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
        return // is no username loop start this return will stop the function further by return nothing
    }
    return `${username} just logged in`
}

logInUserMessage("Hukum")
// return Doesn't ENSURE that the value will be printed 
// it just returns the value , hence no OUTPUT

//NOW IT WILL GIVE OUTPUT
// console.log(logInUserMessage("Hukum"));

console.log(logInUserMessage());
//no argument passed will give undefined

