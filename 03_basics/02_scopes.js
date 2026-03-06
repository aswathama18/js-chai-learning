// var c = 300            //<- Global Scope
let a = 300
if (true){
    let a = 20
    const b = 30          //<-Block Scope
    console.log("INNER: ", a);
}



console.log(a);
// console.log(b);
// console.log(c);

// Note* _ > global scope is different in browser environment and node env
