// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["raju","shaktiman", "Captain America" ]
const myArr2 = new Array(90, 'tycoon' , 3, 56, 55, 345, 56)

// console.log(myHeroes[4]);
// console.log(myArr2[0]);
// in js array copies create shallow copies .Means share the same reference point 


//Array  methods

// myArr.push(6)
// myArr.pop()
// myArr2.unshift(9)
// myArr2.shift()

// const newArr = myArr2.join()
// // console.log(myArr.includes(5));
// // console.log(myHeroes.indexOf("hulk"));

// console.log(myArr2);
// console.log(typeof newArr);


//slice , splice 
// slice slices out the range and doesnt add the end positioned values specified. 
// splice does add the end positioned value specified but it removes the value from the array itself Also.

console.log("A", myArr2);
console.log("B", myArr2.slice(1, 2));
console.log("C", myArr2.splice(1, 2));
console.log("D",myArr2);

//OUTPUT :
// A [ 90, 'tycoon', 3, 56, 55, 345, 56 ]
// B [ 'tycoon' ]
// C [ 'tycoon', 3 ]
// D [ 90, 56, 55, 345, 56 ]



