// Checking if something is an Array
// Because arrays are objects, typeof names gives "object". To check if something is an Array, use Array.isArray:


const names = ['Jack', 'Laura', 'Paul', 'Megan'];

console.log(typeof names); // => "object"

console.log(Array.isArray(names)); // => true


const object = {};
console.log(Array.isArray(object)); // => false
