// Deleting items from an array
// Arrays in JavaScript are regular objects, and items can be deleted using the delete keyword. However, this does not change the length of the array and leaves a hole of empty. In other languages, this is similar to a sparse array. The empty holes are skipped when using traversal or mutation operations.

const names = ['Jack', 'Laura', 'Paul', 'Megan'];
delete names[1];

console.log(names);
// =>  ["Jack", empty, "Paul", "Megan"]

console.log("names.length: " + names.length); // => 4

names.forEach((name) => console.log(name));
// => Jack
// => Paul
// => Megan


// If there should be no holes, and if the length should reflect the number of items that will be traversed or mutated, use splice instead.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const names2 = ['Jack', 'Laura', 'Paul', 'Megan'];
names2.splice(1, 1);

console.log(names2);
// =>  ["Jack", "Paul", "Megan"]

console.log("names2.length: " + names2.length); // => 3
// => 3

names2.forEach((name) => console.log(name));
// => Jack
// => Paul
// => Megan