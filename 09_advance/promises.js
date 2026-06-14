const promiseOne = new Promise(function(resolve, reject){
    //Do an async task 
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "chaudhary", email: "nikhilchaudhary0108@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "aranam", password: "12345r"})
        }else{
            reject('ERROR Something Went wrong')
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);  
}).finally(()=>console.log("the promise is either resolve or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password:"345"})
        }else{
            reject('ERROR : js went wrong') //use catch to catch the error
        }
    }
    ,1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
    
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')            
//             const data = await response.json() //convert the api string data into json format (json take time to convert so you should use await)
//             console.log(data);
//     } catch (error) {
//        console.log("E:", error);
//     } 
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users') //fetch the data 
.then((response)=>{ 
    return response.json() //return response
}).then((data)=>{
    console.log(data); //this *then* handles the return response
    
})
.catch((error)=>console.log("E: ", error)
)



