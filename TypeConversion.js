// Explicit Type Conversion Examples
let validity = false;
console.log(typeof validity); // "boolean" 

let conversion = String(validity);
console.log(conversion);      // "false"   
console.log(typeof conversion); // "string"

let x = 40;
console.log(typeof x);        // "number"

let toStringX = String(x);
console.log(typeof toStringX); // "string"

//implicit Type Conversion Examples
console.log('1'+ 2 + 2)  // "112' 
console.log(1 + 1 + '2');  // "22" (1 + 1 = 2, then 2 + '2' = "22")

//Number Conversion Examples
 console.log( Number("      47      ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert

console.log("6" / "2") // 3 - division converts strings to numbers
console.log("6" * "2") // 12 - multiplication converts strings to numbers
console.log("6" - "2") // 4 - subtraction converts strings to numbers   
console.log("6" + "2") // "62" - addition concatenates strings
console.log(6 + "2") // "62" - number converts to string and concatenates

let unknownValue;
unknownValue = "6";

console.log(unknownValue + 2) // "62" - unknownValue is treated as a string
console.log(unknownValue - 2) // 4 - unknownValue is treated as a number    

console.log(Number(unknownValue) + 55) // 61 - explicit conversion to number



