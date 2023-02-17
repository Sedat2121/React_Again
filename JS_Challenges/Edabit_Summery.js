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


// Loops

// Loops offer a quick and easy way to do something repeatedly. 
// This section will cover the most common ways of doing loops in modern JavaScript.

// 1. map()
// The .map() method applies a function to every element in an array. 
// A new array is then returned. In other words, .map() takes an array, 
// does something to every element in the array and returns a new array.

// Let's say we have an array of numbers:
const numbers = [1, 4, 9, 16];
// To multiply every element in the numbers array by 2, we do this:
numbers.map(x => x * 2);
// Which would return:
[2, 8, 18, 32]

// Subtract 2 from every element in the numbers array.
const numbers = [1, 4, 9, 16]

function subtractTwo(numbers) {
    return numbers.map(x => x -2)
}

// 2. filter()

// The .filter() method returns a new array containing all 
// elements that pass a test from a function you provide. 
// In other words, .filter() takes an array, tests every 
// element and returns a new array containing only elements 
// that pass a test you provide.

// Let's say we have an array of strings:
const words = ["thaw", "achievement", "gain", "outlet", "difference"];
// To return only elements in the words array less than 5 characters in length, we do this:
words.filter(word => word.length < 5);
// Which returns the following output:
["thaw", "gain"]

// Return only numbers in the years array greater than 1950.
const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020];

function getYears(years) {
    return years.filter(year => year>1950)
}

/*
JavaScript Sorting Arrays

The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

Reversing an Array
The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

Use the same trick to sort an array descending:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/
