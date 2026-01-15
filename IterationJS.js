let counter = 0;

for(let k=0; k <= 10; k++) 
{
    console.log("Current number is:", k);
}
console.log("Sum of first 10 natural numbers is:", counter);

let goal = 5;
for (let i = 0; i < goal; i++) {
    console.log(`Iteration ${i} of ${goal}`)
}

const phone = {
    model: 'iPhone 11',
    colour: 'black',
    storage: 64
}
for (let keyyy in phone) { // iterates over each property in the phone object
    console.log('key::      ' + keyyy); // prints each object property name (key) in turn
    console.log('value: ' + phone[keyyy]); // prints each object value in turn
}

let student = {
    Firstname: "Rahul",
    Lastname: "Pala",
    Age: 21,    
    Institute: "QUT",
    Company: "Microsoft"
}

for(let key in student) {
    console.log(key); // prints each object property name (key) in turn
    console.log(student[key]); // prints each object value in turn
}
console.log(student["Firstname"]);




