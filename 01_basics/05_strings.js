const name = "Hukum"
const age = "102"

// console.log(name + age +  Context ) // old method of concatention of strings 
console.log(`hello my name is ${name} and i am ${age} old.`);

const gameName = new String(`hukum ka samrajya`)

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,7)
// console.log(newString);

const anotherString = gameName.slice(-7, -3)
console.log(anotherString);