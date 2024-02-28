/*
// creating a array.
let myArr = [1, 3, 4, 5, 'shubham', true]
console.log(myArr)

// creating using new keyword 
let Heros = new Array('Manoj Bhajpaye', 'Ranbir', 'Rajkumar');
console.log(Heros)
*/

// Array methods


// newArr.push(8, 9)
// newArr.pop()    // it will remove the last element.

// console.log(newArr.includes(8))    // returns boolean value.

// newArr.unshift(9)                  // it adds the element at first
// newArr.shift()                    // it removes the element from first


// console.log(newArr.indexOf(4)


//slice()
let newArr = [1, 3, 4, 5, 6, 7]
console.log(newArr.slice(1, 4))
console.log("original array : ", newArr)


//splice()
console.log(newArr.splice(1, 4))
console.log("original array : ", newArr)
