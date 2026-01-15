//Shallow Copying Using a For...In Loop
const user = { name: 'Elliot', age: 27 };
const userClone = {}; // empty object, refers to different memory location
for (let key in user) { // iterate over user properties
    userClone[key] = user[key]; // re-create them in userClone
}
console.log(userClone); // { name: 'Elliot', age: 27 }

const Student = {
    Firstname: "Rahul",
    Lastname: "Pala",
}
const studentClone = {};

for(let key in Student) {
    studentClone[key] = Student[key];
}
console.log(studentClone); // { Firstname: 'Rahul', Lastname: 'Pala' }

//Shallow copy with Object spread. i.e. ... Easy way to clone an object
const newStudentClone = {...Student};
console.log(newStudentClone); // { Firstname: 'Rahul', Lastname: 'Pala' }

newStudentClone.age = 21; // adding new property to the cloned object
console.log(newStudentClone); // { Firstname: 'Rahul', Lastname: 'Pala', age: 21 }
console.log(Student); // original object remains unchanged: { Firstname: 'Rahul', Lastname: 'Pala' }

//Merge multiple objects into one using Object spread
const address = {
    street: '123 Main St',      
    city: 'Metropolis',
    country: 'Fictionland'
};
const mergedStudent = { ...Student, ...address };
console.log(mergedStudent); 
// { Firstname: 'Rahul', Lastname: 'Pala', street: '123 Main St', city: 'Metropolis', country: 'Fictionland' }

//deep copy using structuredClone (for nested objects)
const box1 = {
    weight: '20kg',
    dimensions: { // nested object property
        width: '30cm',
        height: '10cm'
    }
}
const box2 = {...box1}; // shallow clone
box1.dimensions.height = '12cm'; // change box1 nested object property
console.log(box2); // box2 references box1 dimensions and picks up height change

// const box3 = structuredClone(box1); // deep clone
// box1.dimensions.width = '32cm'; // change box1 nested object property
// console.log(box3); // box3 dimensions remain unchanged: { width: '30cm', height: '12cm' }
// structuredClone creates a deep copy, so nested objects are also cloned

//Note: structuredClone is not supported in some older environments.