let student = {
    Firstname: "Rahul",
    Lastname: "Pala",
    Age: 21,    
    Institute: "QUT",
    Company: "Microsoft"
}

console.log(student.Firstname); // Accessing object property using dot notation

//Creating empty object
let user = {};

//Adding properties to the object
user.name = "John";
user.age = 30;
user.Lastname = "Doe";
console.log(user); // Output: { name: 'John', age: 30 }
console.log(user.name); // Output: John

//Modifying properties of the object
user.age = 31;
console.log(user.age); // Output: 31
//Deleting properties from the object
delete user.Lastname;
console.log(user); // Output: { name: 'John', age: 31 }
console.log(user.Lastname); // Output: undefined


//Object with operations. We can get, set or delete the value of a property key.
//get
console.log(user.name); // Output: John
//set
user.name = "Ridhima";
console.log(user.name);
//delete
delete user.age;
console.log(user.age); // Output: undefined

console.log(user);

//property existence check
console.log("name" in user);    // Output: true
console.log("age" in user);     // Output: false    

const phone = {
    model: 'iPhone 11',
    colour: 'black'
}
if (phone.colour)
     console.log(`My ${phone.model} is ${phone.colour}`) // prints message

if (phone.storage) 
    { // undefined counts as false, so the below won't print
    console.log(`My ${phone.model} has ${phone.storage}GB`);
}

//Iterating over object properties

