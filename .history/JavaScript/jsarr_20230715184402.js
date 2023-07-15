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
const myChildren1 = myGirls.concat(myBoys);
// console.log(myChildren1);
// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
// console.log(myChildren2);

// The concat() method can also take strings as arguments:
const arr11 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr11.concat("Peter", arr3); 
console.log(myChildren3);

// flat()
// Flattening an array is the process of reducing the dimensionality of an array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArray = [[1, 3], [5, 7], [9, 11]];
const newArray = myArray.flat();
console.log(newArray);

// splice ()
// The splice() method can be used to add new items to an array
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.splice(3, )