const myNums = [1, 2, 3, 4 ,5]

// const mytotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and current value is ${currval}`);
//     return acc + currval
// }, 0)


const mytotal = myNums.reduce(  (acc, currvalue)=> (acc + currvalue),0 )

console.log(mytotal);


const shoppingkart = [
    {
        itemname: "pycourse",
        price : 999
    },
    {
        itemname: "DevopsCourse",
        price : 890
    },
    {
        itemname: "Javacourse",
        price : 4590
    }
]

const pricetopay =  shoppingkart.reduce(  (acc, item)=> (acc + item.price),0)
console.log(pricetopay);
