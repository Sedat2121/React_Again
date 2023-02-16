// Arrays

// Arrays are lists of items. They look like this:

// const fruit = ["apple", "banana", "orange", "mango", "tomato"]
// Each fruit in the above array is called an element. Although every element in the above example is a string, array elements can be any value:

// const stuff = [true, 1976, null, "hey"]
// # Indexes

// Each element in an array has an index that starts at 0. Using the first fruit example, "apple" is at index 0, "banana" is at index 1, "orange" is at 2, and so on until the end of the array.

// To access a specific element within an array, we do this:

// fruit[2]
// That's the index for "orange".

// Return the element "Donatello".

// Remember the first element in an array is 0.
// Always return your answer!

const turtles = ["Raphael", "Michelangelo", "Leonardo", "Donatello"];

function turtlePower(turtles) {
    return turtles[3];
}

// Mutability
// Elements in arrays are mutable, which means they can be changed.
// For example, let's say we've got an array of numbers:
const numbers = [14, 56, 78];
// To change the value of 14 (at index 0), we do this:
numbers[0] = 35;

// Given an array of numbers, set the value of the data stored at index 1 to 88.
const numbers = [1, 4, 6, 8, 0];

// enter code below this line
numbers[1] = 88;

