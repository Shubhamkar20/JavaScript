// singleton object
// Object.create() 


// object literals
let mySym = Symbol('key1')
let student = {
    name : 'shubham',
    [mySym] : 'newKey',
    age : 21,
    Hobbies : ['cricket', 'travelling', 'cinema'],
    isLoggedIn : false
};


/*
// accessing the elements from object.
console.log(student.Hobbies[0])
console.log(student['name'])
console.log(student['Hobbies'][2])
*/


/*
// changing the object elements
student.age = 22;

Object.freeze(student) // it will lock the object so no one can make changes
student.age =21;
console.log(student)
*/



// creating a function 
student.greetings = function(){
    console.log(`good morning, ${this.name}`); // using this keyword, when we refere to same object.
}
student.greetings()


student.department = 'IT';

console.log(student)