let Student1Name = "Rahul";
let Student2Name = "Mirza";
let Student3Name = "Rahul";


console.log(Student1Name == Student2Name); // false
console.log(Student1Name === Student2Name); // false
console.log(Student1Name == Student3Name); // true
console.log(Student1Name.length === Student2Name.length); // true
console.log(Student1Name.length != Student2Name.length); // false
console.log(Student1Name > Student2Name); // true
console.log(Student1Name < Student2Name); // false
console.log(Student1Name >= Student3Name); // true

// Comparing different types
console.log("2" > 1) // true - converts to 2 > 1
console.log("2" != 1) // true - converts to 2 is not equal to 1
console.log("02" == 2) // true - converts to 2 == 2
console.log(true == 1) // true - true converts to 1
console.log(false == 0) // true - false converts to 0
console.log(null == undefined) // true - both convert to 0

//Strict Equality Comparison
console.log("2" === 2) // false - different types
console.log(true === 1) // false - different types
console.log(false === 0) // false - different types
console.log(null === undefined) // false - different types
console.log(NaN === NaN) // false - special case, NaN is not equal to NaN