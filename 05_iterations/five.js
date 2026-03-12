const coding = ["js", "cpp", "py", "java", "ruby"]

// coding.forEach(  function(item){ // here it is an call back function which doesn't need name 
//     console.log(item);
// })


// function Printme(Item) {
//     console.log(Item);
// }

// coding.forEach(Printme)

// coding.forEach( (item, index , arr) => {
//     console.log(item, index, arr);
// }  )
// expected output
// js 0 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// cpp 1 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// py 2 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// java 3 [ 'js', 'cpp', 'py', 'java', 'ruby' ]
// ruby 4 [ 'js', 'cpp', 'py', 'java', 'ruby' ]


const myCodind = [
    {
        languagename : "javascript",
        languageFileName : "js"
    },
    {
        languagename : "python",
        languageFileName : "py"
    },
    {
        languagename : "java",
        languageFileName : "java"
    }
]

myCodind.forEach( (item) =>{ //accessing array with for each loop
    console.log(item.languagename);
    
})