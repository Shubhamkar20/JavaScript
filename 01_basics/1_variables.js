// var Fname = "Shubham"
// var Fname = 'Akash'   // redeclare
// Fname = 'Samir'       // redefine
// console.log(Fname)

/*
    prefer not to use var.
    because it allows redeclaration of variable with same name, can led to problem in understanding.
    And also because of issue in block scope and functional scope.
*/


// let Lname = "Patil"
// let Lname = 'Kharwar'  // cannot be redeclare
// Lname = 'Bhosale'     //redefine
// console.log(Lname)


// const id = 1 
// console.log(id);


//const cannot be redeclare and redefine
//const is used to declare constant variable which cannot be changed if declared.


let Fname, Lname;
Fname = 'Shubham'
Lname = 'Patil'
const id = 26

console.table([Fname, Lname, id])
// to display all records together and in table format we can use 'console.table([])' instead of 'console.log()'