//Using Boolean Class funcstions to convert values to boolean
// console.log( Boolean("") ) // false - empty string
// console.log( Boolean(0) ) // false - zero value
// console.log( Boolean(null) ) // false - no value
// console.log( Boolean(undefined) ) // false - unknown value
// console.log( Boolean(NaN) ) // false - not a number
// console.log( Boolean("false") ) // true - non-empty string
// console.log( Boolean(-1) ) // true - non-zero number

// let age;
// age = 18;

// if(age>12 && age <19)
//     console.log("Teenage years")

// if( age > 60)
//     console.log("You are a senior citizen")

// let myAge = 88;

// if(myAge>12 && myAge <19)  //true or false
//     console.log(myAge>12 && myAge <19)

//     else
//         console.log(myAge>19 && myAge <60)


// if( myAge > 60) 
//     console.log(myAge > 60)

if ("") console.log('empty string is true') // Empty string is false. implicit "" conversion to false - won't print msg
if (undefined) console.log('undefined is true') // Undefined is false. implicit conversion to false - won't print msg

console.log("Hello Rahul")

console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true
console.log( 42 ? '42 is true' : '42 is false' ) // 42 is true
console.log( -42 ? '-42 is true' : '-42 is false' ) // -42 is true
console.log( " " ? 'space is true' : 'space is false' ) // space is true

let age;
age = 18;
console.log(age >12 && age < 20 ? 'teenage years' : 'not teenage years')
console.log(age >60 ? 'senior citizen' : 'not a senior citizen')

//Negation
console.log(!true) // false
console.log(!false) // true
console.log(!"") // true - empty string is falsy, so negation makes it truthy
console.log(!0) // true - zero is falsy, so negation makes it truthy
console.log(!NaN) // true - NaN is falsy, so negation makes it truthy