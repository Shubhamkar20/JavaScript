/*
// singleton object
const obj = new Object();
console.log(obj)

// non singleton object
const obj1 = {};
console.log(obj1)
*/



/*
let userObj = {
    email : 'userOne@gmial.com',
    age : 21,
    fullName : {
        userFullName : {
            Fname : 'Shubham',
            Lname : 'Patil'
        }
    },
    Location : 'Borivali'
};

console.log(userObj.fullName.userFullName.Fname)
*/



/*
// Type 1 : 

// Combining objects together.
// we can use Object.assign(target, source), it will store a new obj into target. 
// target --> inwhich the new obj gets stored (it can be any object)
// source --> other objects.

let obj1 = {
    1 : 'One',
    2 : 'Two',
    3 : 'Three'
};

let obj2 = {
    4 : 'Four',
    5 : 'Five',
    6 : 'Six'
};
                        //target
// let nweObj = Object.assign({}, obj1, obj2);
// console.log(nweObj)



// Type 2 :

// using spread operator (mostly used to combine objects)
console.log({...obj1, ...obj2})
*/



/*
// WE GET data from DB in the form of array of objects as shown below.
let dataDB = [
    {
        Fname : 'Shubham',
        age : 20
    },
    {
        Fname : 'Manish',
        age : 21
    },
    {
        Fname : 'Akash',
        age : 20
    },
    {
        Fname : 'Tushar',
        age : 19
    }
]

// console.log(dataDB[0].Fname)
for (let i = 0; i < dataDB.length; i++) {
    console.log(Object.values(dataDB[i]))
}
*/


// how to check whether an object has the property or not.
let obj = {
    fname : 'shubham',
    lname : 'patil',
    age : 20
};

console.log(obj.hasOwnProperty("name"))



// object De-structure
console.log(obj.fname)

// here we have destructure the obj fname instead writing obj.fname we can write fname.
const {fname} = obj; 
console.log(fname)
