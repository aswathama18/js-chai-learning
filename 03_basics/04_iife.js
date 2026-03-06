// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //Named iife
    console.log(`DB CONNECTED`);
    
})(); // in js when a iife function is invoked , it doesn't know where to stop it so we use `;` to end it 
// global scope ke variable polloution se bachne ke liye, and to remove the declaration variable we use iife
// ()() -> first parantheses is for containing the code and second is for execution call

( (name) => {
    //Simple IIFe
    console.log(`DB CONNECTED two ${name}`);
    
})("Hukum")