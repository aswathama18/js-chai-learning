// for of  (array specifics loops)

// ["", "", ""]
//[{}, {} , {}]

const arr = [1, 2, 3 , 4, 5]

for (const iteator of arr) {
    // console.log(iteator);
    
}

const names = "hukum chaudhary"
for (const aplha of names) {
    if (aplha == ' '){
        console.log(" ");
        continue //skips one mistake and continue the code 
    }
    // console.log(`each char is ${aplha}`);
    
}

// Maps

const map = new Map();
map.set('uttar', "North")
map.set('Purab', "east")
map.set('paschim', "west")
map.set('dakshin', "South")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, `:-` ,value );
}

const myobject = {
    "game" : "NFS",
    'game2' : 'batman'
}

// for (const [key , value] of myobject) {
//     console.log(key, `:-` ,value );
// }

