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
