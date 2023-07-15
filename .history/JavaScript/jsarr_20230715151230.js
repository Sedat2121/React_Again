// JavaScript Array Methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Length
// The length property returns the length (size) of an array:
let size = fruits.length;
console.log(size);

// toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
let String = fruits.toString();
console.log(String);

// join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
let Join = fruits.join(", ");
console.log(Join);

// pop()
// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out":
// fruits = ["Banana", "Orange", "Apple", "Mango"];
let one = fruits.pop();
console.log(one); // Mango

// Push
// the push() method adds a new element to an array(at the end)
// The push() method returns the new array length:
fruits.push("Kiwi");
console.log(fruits);

// Shift
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out":
const shifted = fruits.shift();
console.log(shifted);

// unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// The unshift() method returns the new array length
let newShifted = fruits.unshift("Limon");
console.log(newShifted);
console.log(fruits);

// length property
// The length property provides an easy way to append a new element to an array
fruits[fruits.length] = "Watermelon";
console.log(fruits);

// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren