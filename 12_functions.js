/*
function myString(str){  // passing data while defining a function is called parameters.
    console.log(str);
}

myString("Shubham")
// passing data while executing the function is called as arguments.
*/

/*
// executing a function using variable
function myName(str){
    // console.log(str)
    return str; 
    // and js doesn't allow console.log() after the return statement.
}

// let result = myName('shubham')
// console.log(result)

let result = myName()
console.log(result)
// when we don't pass any argument to the function it will return undefined.
*/

// we can also pass the default value as a parameter. eg :
function myName(str = 'Name'){
    // console.log(str)
    return `${str} Good Morning`; 
    // and js doesn't allow console.log() after the return statement.
}

let result = myName()
console.log(result)