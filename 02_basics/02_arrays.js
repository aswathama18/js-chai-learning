const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

//spread operator method 
const allheroes = [...dc_heroes, ...marvel_heroes]
console.log(allheroes);
/* output 
[ 'batman', 'superman', 'flash', 'thor', 'Ironman', 'spiderman' ]
 */


//flat operator solves the recursive arrays (arryas within array) 
// into a simple array with each element individual
const another_array = [ 1, 2, 4, [45, 545, 56.6 , [458, 678], 78], 93, [86, 75 ] ]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/* output 
[
    1,    2,   4,  45,
  545, 56.6, 458, 678,
   78,   93,  86,  75
]
*/

