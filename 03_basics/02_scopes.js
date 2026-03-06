// var c = 300            //<- Global Scope
let a = 300
if (true){
    let a = 20
    const b = 30                 //<-Block Scope
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c);

// Note* _ > global scope is different in browser environment and node env
function one(){
    const username = "Hukum"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "Hukum"
    if (username == "Hukum") {
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);
    
}

// console.log(username);

//+++++++++++++++++++ INTERESTING

console.log(addone(5)); //we can access the fucntion before the declaration because of the it is not in a constant
function addone(num){
    return num +1
}
//6

console.log(addtwo(5)); // accessing function before declaration of it in a constant
const addtwo = function(num){  //<- expression
    return num+2
}
//ReferenceError: Cannot access 'addtwo' before initialization