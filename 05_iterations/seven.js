//maps

const myNums = [1, 2, 3, 4, 5, 6, 7  ,8, 9, 10]

// const neNums = myNums.map(   (num)=> num + 10) //automatically returns values 


newNums = myNums
        .map(  (num)=> num * 10)          //chaining with multiple methods
        .map(   (num)=> num + 1)
        .filter (  (num)=> num > 38)

console.log(newNums);
