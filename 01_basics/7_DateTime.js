let myDate = new Date()
// console.log(myDate)                        
// console.log(myDate.toString())
// console.log(myDate.toDateString())       
// console.log(myDate.toISOString())
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString())       
// console.log(myDate.toLocaleString());           
// console.log(myDate.toLocaleTimeString());

// let newDate = new Date(2024, 2, 28)
// let newDate = new Date(2024, 2, 28, 16, 40)
// let newDate = new Date('02/27/2024')
// console.log(newDate.toLocaleDateString())



// timeStamp
let timeStamp = Date.now()
console.log(timeStamp);

console.log(myDate.getTime())

// above timestamp is given in ms to convert it into seconds divide by 1000
console.log(Math.floor(timeStamp/1000))