const user = {
    name: 'Bilbo Baggins',
    sing: function() { // method of user object
        console.log('Roads go ever ever on');
    },
    sing2() { // shorthand syntax, does same as above
        console.log('Over rock and under tree')
    }
}
user.sing(); // Roads go ever ever on
user.sing2(); // Over rock and under tree


const dog = {
    name: 'Buddy',
    bark: function() {  // method of dog object
        console.log('Woof Woof!');
        return this.name; // 'this' refers to the dog object        
}
}
dog.bark(); // Woof Woof!
console.log(dog.bark()); // Woof Woof!  Buddy
console.log(dog);

function add(a, b) {
    console.log(a + b);
}

let result = add(2, 3);
console.log(result);
// undefined is printed because add() does not return any value

add(5, 7); // 12

function add(a, b) {
    return a + b;
}

let result2 = add(2, 3);
console.log(result2); // 5
