// Stack memory --> used for primitive dataTypes.
// Heap memory --> is used for Non-primitive dataTypes


// stack memory example

let Fname = 'Shubham'
let anotherName = Fname
anotherName = 'Akash'

// console.log(Fname)
// console.log(anotherName)

// heap memory example

let userOne = {
    name : 'shubham',
    age : 20
}

let userTwo = userOne
// console.log(userTwo.name)
// console.log(userOne.name)

userTwo.name = 'Akash'

console.log(userTwo.name)
console.log(userOne.name)