// Dates 

// let myDate = new Date()
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2024, 0 , 5)
let myCreatedDate = new Date("10-05-2003")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// let info = `${newDate.getMonth() + 1} and the time is ${newDate.getHours()}`
// console.log(info);

const weekday = newDate.toLocaleString('Default',{
    weekday: "long",
    timeZone : "Asia/Kolkata"
})
console.log(newDate);
console.log(weekday);

