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

// .length 
// In most cases, you won't know the exact length of an array. In other words, you won't know how many elements it contains. That's where the .length property comes in.

// Let's say we have an array of movie names:
const movies = ["The Matrix", "Se7en", "The Wizard of Oz", "Marry Poppins"];

// To get the exact length of the movies array, we would use the .length property.
movies.length

// That would give you 4, as there are four elements in the movies array.

// Given an array arr of unknown length, return its length.

function getLength(arr) {
    return arr.length;
}


// Objects

// Arrays are good for lists, but for other tasks 
// they can be hard to work with. Consider an array of names:
const firstNames = ["Tyrion", "Jon", "Jorah", "Arya", "Joffrey"];
const lastNames = ["Lannister", "Snow", "Mormont", "Stark", "Baratheon"];

// What if you have a last name in mind (let's say it's Snow) and want to look up his first name. With arrays, it takes a lot of work because "Jon" is in one array, and "Snow" (his last name) is in a totally different array.

// This can get very messy because if we add a new person to the 
// firstName array, we have to also update the lastName array. 
// If we want to keep track of more than a person's first and last names, 
// things get complicated.

// Objects are an easier way to store and maintain information, like this:
const person1 = {
    firstName: "Joffery",
    lastName: "Baratheon",
    email: "joff@widowswail.com"
};

const person2 = {
    firstName: "Jon",
    lastName: "Snow",
    email: "brooding@thewall.com"
};

const person3 = {
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@pourmeanother.com"
};

// Now we have a variable for each person that can be used to get their 
// values in a more maintainable and readable way.

// Key-Value Pairs
// Objects are like keys on a keyring that open a specific 
// door and behind each door is a room that can store many things. 
// If each key is labeled, you can quickly open doors and access the stuff inside.

const person22 = {
    firstName: "Jon",
    lastName: "Snow",
    email: "brooding@thewall.com"
}
// The things on the left of the : are called keys and the things on 
// the right are values. We refer to this as key-value pairs.

// Dot Notation

// If you want to access the lastName of person3, 
// you would return person3.lastName. 
// This is called dot notation because it uses a . to specify the key you want to access.

// Use dot notation to access the email of person.
function getEmail(person) {
    return person.email;
}

