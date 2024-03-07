// Loops :

/*
// 1. For loop
for (let i = 0; i < 11; i++) {
    console.log(i)
}

console.log(i)
*/


/*
// loop into loop
for (let i = 1; i <= 10; i++) {
    console.log(`Table of : ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
        
    }
    console.log('\n')
    
}
*/


/*
// loop with array
let myArr = ['shubham', 'akash', 'manish']
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element)
    
}
*/



// break and continue keywords
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5)
        continue;
    console.log(element)
    
}