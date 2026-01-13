//Function Declaration.

// function Add(num1, Num2) {
//     console.log(num1 + Num2);
// }

// function Subtract(num1, num2) {
//     console.log(num1 - num2);
// }

// function Multiply(num1, num2) {
//     console.log(num1 * num2);
// }
// function Divide(num1, num2) {
//     console.log(num1 / num2);
// }

// Add(10, 5);         // Output: 15
// Subtract(10, 5);  // Output: 5
// Multiply(10, 5);  // Output: 50
// Divide(10, 5);      // Output: 2    

// function Greet(name) {
//     console.log("Hello, " + name + "!");
// }

// Greet("Rahul"); // Output: Hello, Rahul!

// function Addition(num1, num2) 
// {
//     return num1 + num2;
// }
// let result = Addition(20, 30);
// console.log("The addition result is: " + result); // Output: The addition result is: 50

// //passing function as parameter
// function PerformOperation(num1, num2, operation, operation1) {
//     return operation(num1, num2);
// }       
// let sum = PerformOperation(15, 25, Multiply);
// console.log("The sum is: " + sum); // Output: The sum is: 40

//basic function with no parameters and no return value
function sayHello() {
  console.log("Hello Rahul!");
}
sayHello(); // Output: Hello Rahul!

//funcction with Parameters (Input) and no return value
function greet(name) {
  console.log("Hello " + name);
}

greet("Rahul");
greet("Ridhima");

//function with Parameters (Input) and return value (Output)
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);

function test() {
  console.log("Start");
  return;
  console.log("End");
}

test();
// Output: Start

function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}

let user = createUser("Rahul", 30);
console.log(user.name);
console.log(user.age);

function square(n) {
  return n * n;
}

let answer = square(7);
console.log("Square is:", answer);

function Add(num1, Num2) {
    let result = num1 + Num2;
    return result;
}
let sum = Add(100, 200);
console.log("Sum is:", sum);

function Multiply(num1, num2) {
    
    return num1 * num2;
}
let product = Multiply(10, 20);
console.log("Product is:", product);

let resultOfaddition = Add(Multiply(2,2),3);
console.log("Result of addition is:", resultOfaddition);

// function checkAge returns a value when called
function checkAge(age) {
    if (age >= 18) {
        return 'adult'; // if the condition is true, return this string and exit
    }
    return 'non-adult'; // if the condition was false, return this string and exit
}

let check = checkAge(20);
console.log(check);
console.log( checkAge(21) ) // adult
console.log( checkAge(13) ) // non-adult


