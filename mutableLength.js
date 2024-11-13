// Array length can be mutated
// The length property of an array is connected to the list of items the array holds. It can be mutated. When the length is increased, it creates empty holes, that are not considered when traversing or mutating the array. When the length is decreased, it removes the elements at the end of the array.


const names = ['Jack', 'Laura', 'Paul', 'Megan'];

names.length = 6;

console.log(names); // => ["Jack", "Laura", "Paul", "Megan", empty × 2]


names.length = 2;

console.log(names); // =>  ["Jack", "Laura"]
