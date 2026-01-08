// Priority: Division, multiplication, addition, subtraction.

let one = 1;
let two = 2;
let three = 3;

console.log(one + two - three * two / one); // 1 + 2 - 3 * 2 / 1 = 1 + 2 - 6 = -3

console.log(2**53-1); // 9007199254740991 (largest safe integer in JavaScript)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(-(2**53-1)); // -9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

const bigint_valid = 1234567890123456789012345678901234567890n; // valid BigInt
console.log(bigint_valid);

const bigint_invalid = 92345699997890123456789012345678901234567890; // another way to create BigInt
console.log(bigint_invalid);

// Operations between BigInt and Number are not allowed
// console.log(bigint_valid + 10); // Error
console.log(bigint_valid + BigInt(10)); // Valid operation
