// Callback function

// const increment = () => {
//     const counter = document.querySelector("#counter");
//     counter.textContent = Number(counter.textContent) + 1;
// }

// increment();

// 1. Event listeners are good examples for callback functions

// document.querySelector("button").addEventListener("click", () => {        // Nameless callback function
//     const counter = document.querySelector("#counter");
//     counter.textContent = Number(counter.textContent) + 1;
// });


// 2. Effective programming approach

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const div = (a, b) => a / b;

// const calculate = (callback) => {
//     const num1 = Number(prompt("first number: "));
//     const num2 = Number(prompt("second number: "));
//     console.log("Result: ", callback(num1, num2));
// };

// calculate(sum);
// calculate(mult);


// FOREACH

// //? 1st Method
// const students = ["esra", "adjoa", "alperen", "sultan"];

// const print = (name) => { // name is the value 
//     console.log(name);
// }

// students.forEach(print);

// //? 2nd Method: Anynmous Method
// students.forEach((student) => console.log(student));  // there is not any name for the function

//? Example
// const payments = [100, 500, 400, 700, -300, -900];

// let sum = 0;
// payments.forEach((payment) => (sum += payment));
// console.log("SUM: " + sum);

// // forEach does not return any value
// const sumofPayments = payments.forEach((p) => (sum +=p));
// console.log(sumofPayments); 

// payments.forEach((p, i) => {
//     p > 0
//         ? console.log(i + 1, `You deposit ${p}`)
//         : console.log(i + 1, `You withdraw ${p}`)
// });



//? MAP 

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const doubled = numbers.map((n) => n * 2);
// console.log(doubled, numbers);

// example
// let grades = [30, 40, 50, 60, 70, 80, 90, 20];

// grades = grades.map((grade) => (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2));

// console.log(grades);

 
// Modified Example
// let grades = [30, 40, 50, 60, 70, 80, 90, 20];

// grades = grades.map((grade, index) => {
//     const newGrade = (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2)
//     return `${index + 1}. Student's Grade: ${newGrade}`;
// });

// console.log(grades);

// Palindromic Example

//const words = ["mum", "kek", "isi", "iyi", "gel"];
// const checkPalindrome = words.map((word) => [...word].reverse().join('') === word);
// console.log(checkPalindrome);

// An alternative solution
// const checkPalindrome = words.map((w) => {
//     const reverse = w.split("").reverse().join("");
//     if (reverse == w) {
//         return w; // console.log(w);
//     }
// });

// console.log(checkPalindrome);


// Filter
const words = ["mum", "kek", "isi", "iyi", "gel"];
const checkPalindrome = words.filter((word) => [...word].reverse().join('') === word);
console.log(checkPalindrome);
