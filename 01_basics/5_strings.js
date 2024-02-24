let str = 'shubham'
// console.log(typeof str)
// console.log(str[0])

/*
// another way to declare a string, it's type will be object as we are creating it's object using (new)
const fname = new String('Shubham')
console.log(fname[0])
*/



/*
// Prototypes
// 1. lenght
console.log(str.length)

// 2. toUpperCase()
let strNew = str.toUpperCase()
console.log(strNew)

// 2. toLowerCase()
console.log(strNew.toLocaleLowerCase())

// 3. charAt(index)
console.log(str.charAt(2))

// 4. concat(value)
let strConcat = str.concat(' patil');
console.log(strConcat)

// 5. endsWith(value)
console.log(str.endsWith('m'))

// 6. indexOf(value)
console.log(strConcat)
console.log(strConcat.indexOf('p'))

// 7. includes(value) --> returns boolean value
console.log(str.includes('s'))

// 8. lastIndexOf(value) --> returns the last index of the value.
console.log(str)
console.log(str.lastIndexOf('h'))

// 9. replace('currentValue', 'newValue')
console.log(strConcat)
console.log(strConcat.replace('shubham', 'Shubhamkar'))



let fname = ' shubham ';
// console.log(fname.length)
console.log(fname)

// 10. trim()
let fnameTrim = fname.trim();
console.log(fnameTrim)
// console.log(fnameTrim.length);

// 11. trimStart()
console.log(fname.trimStart())

// 12. trimEnd()
let fnameTrimEnd = fname.trimEnd()
console.log(fnameTrimEnd.length)

