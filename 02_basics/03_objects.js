// singleton 
// constructor make singleton


//object literal
const mysyn = Symbol("keyjaiho1") // for using a symbol in an object we use square brackets []

const Jsusr = {
   name : 'hukum',
   [mysyn]: "keyjaiho1",
   "fullname" : "Hukum chaudhary",
   age : 20,
   email : "absd@gmail.com",
   location: 'hyderabad',
   isloggedIn : true,
   lastloginDay : ["monday","Tuesday"]
}

// console.log(Jsusr.email);
// console.log(Jsusr["isloggedIn"]);
// console.log(Jsusr.fullname);
// console.log(typeof Jsusr[mysyn]);

// console.log(Jsusr["email"]);
// by using freeze u can freeze the object so no one can change it

// Object.freeze(Jsusr)
Jsusr.email = "hukumchaudharu009@gmail.com"

// console.log(Jsusr["email"]);
// console.log(Jsusr);

Jsusr.greetings = function(){
    console.log("hello user");
    
}

Jsusr.greetingsTwo = function(){
    console.log(`hello , ${this.fullname} how are you ? `);
    
}
console.log(Jsusr.greetingsTwo());
