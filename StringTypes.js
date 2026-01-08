const doubleQuoteString = "String that can include 'Single quotes' easily.";const singleQuoteString = 'String that can include "Double quotes" easily.';
const backtickString = `String that can include both 'Single quotes', "Double quotes" easily and include variables like ${doubleQuoteString}.`;

let hourlyPay = "55";
let bonus = "200";

console.log(`My hourly pay is ${hourlyPay} and my bonus is ${bonus}.`); // Correct: variables interpolated

console.log("Total pay is " + (Number(hourlyPay) + Number(bonus)) + "."); // Correct: conversion before concatenation
console.log("Total pay is " + hourlyPay + bonus + "."); // Incorrect: concatenation without conversion

console.log(`My total pay is ${hourlyPay} and my bonus is ${bonus}.`); // Correct: variables interpolated
console.log(`My total pay is ${Number(hourlyPay) + Number(bonus)}.`); // Correct: conversion within template literal

let nameOfStudent = "Alice Johnson";
console.log(`Hello, ${nameOfStudent}! Welcome to the course.`);