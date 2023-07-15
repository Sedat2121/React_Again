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
fruits = ["Banana", "Orange", "Apple", "Mango"];
let one = fruits.pop();
c