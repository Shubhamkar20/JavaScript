let arrFruits = ['mango', 'apple', 'orange']
let arrVeg = ['carrot', 'onion', 'potato']

// methods to combine two arays

/*
what will be the output of the below statement.
arrFruits.push(arrVeg);
console.log(arrFruits);    // it will take the second array as the element for first array.
*/

/*
let newArr = arrFruits.concat(arrVeg) // concat() returns the new array
console.log(newArr)       
console.log(arrFruits)    // it doesn't change the original array 
*/


/*
// using spread operator (...) we can join two arrays.
console.log([...arrFruits, ...arrVeg])
*/

/*
// checking if it is array or not
let name = 'Shubham'
console.log(Array.isArray(name))

// to convert it into array use from()
console.log(Array.from(name))
*/


// if there are multiple arrays into the array 
let newArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]
console.log(newArr)

// to merge into single array use of()
console.log(Array.of(Infinity))