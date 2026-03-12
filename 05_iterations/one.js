// for

for (let i = 1; i < 11; i++) {
    const element = i;
    // if (element == 5) {
    //     console.log("5 is best number");
    // }

    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outerloop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`innerloop value : ${j} and outerloop value is ${i} `);
        // console.log(i + 'x' + j + '=' + i*j );
                
    }
    
}
let myarray = ['superman', 'naewman', 'spiderman', 'ponga ji']

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);   
    
}

//break and continue

for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log(`5 detected`);
        break
    }
    // console.log(`value of i is ${i}`);   
}

for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log(`5 detected`);
        continue
    }
    console.log(`value of i is ${i}`);   
}