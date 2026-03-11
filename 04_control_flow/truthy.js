const useremail = []

// if (useremail) {
//     console.log("have email");
    
// }
// else {
//     console.log("dont have email");
// }

// falsy values 
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// [], "0", `false`, " ", {}, function() {}

// if
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {       //Object.keys(emptyObject) it will provide a array to use array functions on object 
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15


console.log(val1);