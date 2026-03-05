// const tinderUser = new Object()
/*(A singleton object in JavaScript is an object (part of a design pattern)
 that ensures only one instance of its kind exists throughout the application 
 and provides a global point of access to that single instance)*/


 // NON singleton object 
const tinderUser = {}
tinderUser.id = "123av"
tinderUser.name = "Hukum"
tinderUser.isloggedIn = true

// console.log(tinderUser);

const regularUser = {
    email : "afndjo@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Badal",
            lastame: "punia"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2 : "b", 3: "c"}
const obj2 = {4: "r", 5 : "t"}
const obj4 = {6: "r", 8 : "t"}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // by providing {} we are providing a target to add all the objects 

const obj3 = {...obj1, ...obj2 , ...obj4}
// console.log(obj3);

const users = [
    {
        id : 1,
        email: "h@gmail.com"
    },
     {
        id : 1,
        email: "h@gmail.com"
    },
     {
        id : 1,
        email: "h@gmail.com"
    },
     {
        id : 1,
        email: "h@gmail.com"
    },
     {
        id : 1,
        email: "h@gmail.com"
    }, {
        id : 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));

//DE-STRUCTURING
const course = {
    coursename : "js in Hindi",
    courserice : "989",
    courseteacher : "hitesh"
}

// const {courseteacher: ins} = course
console.log(ins);
/* example of destructuring in React
const navbar = ({company}) => {

}
navbar(company = "hitesh")*/

// {
//     "name" : "Nikhil",
//     "coursename" : "jas in hindi",
//     "price" : "free"
// }

