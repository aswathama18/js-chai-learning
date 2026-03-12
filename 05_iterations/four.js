//for in loop (used for objects)

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "cpp", "py", "java", "Go"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map();
// map.set('uttar', "North")
// map.set('Purab', "east")
// map.set('paschim', "west")
// map.set('dakshin', "South")

// for (const key in map) {
//     console.log(key); // maps are not iteratable with for in loop 
    
// }