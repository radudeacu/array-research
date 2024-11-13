// About Arrays
// In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types. It includes the length property and also lots of useful methods for traversing and mutating the array.

// To create an array, add elements between square brackets []. To read from the array, put the index in square brackets [] after the identifier. The indices of an array start at zero.

// For example:

const names = ['Jack', 'Laura', 'Paul', 'Megan'];
console.log("names[1]: " + names[1]);
// => Laura

// Arrays can also be created using the constructor syntax, but for most uses, the array literal syntax is recommended.

// const names = new Array();
// names.push('Jack', 'Laura', 'Paul', 'Megan');
// names[1];
// => Laura


// Arrays cannot use strings as element indexes but must use integers (number). Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.


console.log("names.length: " + names.length); // => 4

// Properties can be set on arrays using bracket ['property'] or
// dot .property notation, and this will affect the length, as
// shown below.

names.magician = 'Elyse';
names.length;
// => 4

// The property shows up when logging the array, making it seem
// that the property is somehow incorporated in the array.

console.log(names); // => ["Jack", "Laura", "Paul", "Megan", magician: "Elyse"]


// However, be aware. Properties added via non-numeric keys are
// NOT part of the array's internal list, and are not traversed
// or mutated when using one of the traversal or mutation
// operations.

names.forEach((name) => console.log(name));
// => Jack
// => Laura
// => Paul
// => Megan
