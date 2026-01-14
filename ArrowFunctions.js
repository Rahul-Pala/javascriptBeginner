//Arrow function
const sayHiArrow =() => console.log("Hi from Arrow Function");

sayHiArrow(); // Output: Hi from Arrow Function

const AddArrow = (num1, num2) => {
    let result = num1 + num2;
    return result;
}       
console.log(AddArrow(5, 10)); // Output: 15

const MultiplyArrow = (num1, num2) => {
    let result = num1 * num2;
    return result;  
}
console.log(MultiplyArrow(5, 10)); // Output: 50

const sayHiExpression = function() {
    console.log('Hi')
    console.log(arguments)
}
function sayHiDeclaration() {
    console.log('Hi')
    console.log(arguments.length)
}
const sayHiiArrow = () => { console.log('Hi'); console.log(arguments) 
}

sayHiExpression(1,2,3,9,8,7,6,5); // works
sayHiDeclaration(1,2,3,7); // works
sayHiiArrow(1,2,3); // error: arguments is not defined