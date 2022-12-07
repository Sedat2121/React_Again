// OOP

// const person = {
//     fisrtName: "Alperen",
//     lastName: "akdogan",
//     birthYear: 2021,
//     skills: ["JS", "Python", "CSS"],
//     employed: false,

//     calculateAge2() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

// };

// console.log(person.calculateAge2());
// console.log(person.age);

// ! This Examples

// const calcAgeArrow = (birthYear) => {
//     console.log("Arrow Function in Global Scope");
//     console.log(this);
//     console.log(2022 - birthYear);
// };

// calcAgeArrow(1980);

// const teacher = {
//     birthYear: 1984,
//     calcAge() {
//         console.log("regular function in an Object");
//         console.log(this);
//         console.log(2022 - this.birthYear);
//     },
//     calcAgeArrow: () => {
//         console.log("arrow function in an Object");
//         console.log(this);
//         console.log(2022 - this.birthYear);
//     },
//     calcAgeDelayed() {
//         setTimeout(function () {
//             console.log("regular function in setTimeout");
//             console.log(this);
//             this.calcAge();
//         }, 2000);
//     },
//     calcAgeDelayedArrow: function () {
//         setTimeout(() => {
//             console.log("arrow function in setTimeout");
//             consol.log(this);
//             this.calcAge();
//         }, 2000);
//     },
// };

// teacher.calcAge();
// teacher.calcAgeArrow();
// teacher.calcAgeDelayed();
// teacher.calcAgeDelayedArrow();

// defining a new object !
// const student = {
//     birthYear: 2000,
// };

// student.calcAge = teacher.calcAge;
// student.calcAge();

// new object
// const myFunc = teacher.calcAge();
// myFunc();

// new object
// let anObject = {
//     firstName: 'John',
//     age: 30,
//     isMarried: true,
//     introduce: () => {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     introduce2: function () {
//         return `${this.firstName} is ${this.age} years old`;
//     },
// };

// console.log(anObject.introduce());
// console.log(anObject.introduce2());

//                                  JavaScript Classes

//                Abstruction, Encapsulation, Inheritance, and Polymorphism

// class Pet {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     walk() {
//         console.log("I am walikng");
//     }
//     speak() {
//         return "I like humanbeing";
//     }
// }

//  const myPet = new Pet("Ruby", 3);  // inheritence
//  myPet.walk();

//  class Cat extends Pet {
//     #weight = 5; // keeping private information: encapsulation
//     constructor(name, age, color) {
//         super(name, age) // super => inheritence from parent element
//         this.color = color;
//     }

//     speak() {
//         let preMsg = super.speak();
//         preMsg = " and I also like to meow";
//         return preMsg;
//     }
//  }

//  const muezza = new Cat("muezza", 2, "grey");
//  console.log(muezza.speak());
//  muezza.walk();

//                                  prototypes

// function Pet (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Pet.prototype.walk = function () {
//     console.log('I am walking');
// };

// Pet.prototype.speak = function () {
//     return 'I like humans';
// };

// const myPet2 = new Pet('Karabas', 4);
// console. log (myPet2);

// function Cat (name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
// }

// Cat.prototype = Object.create (Pet.prototype); // binding Cat -- Pet

// const pisi = new Cat('Pisi', 1, 'yellow');
// console.log (pisi);
// pisi.walk();

//                               Getter and Setter

// const person = {
//     firstName: "Alperen",
//     birthYear: 1982,
//     location: {
//         city: "London",
//     },
//     get age() {
//         return new Date().getFullYear() - this.birthYear;
//     },
//     set age(value) {
//         if (value > 0 && value < 150) {
//             this.birthYear = new Date().getFullYear() - value;
//         }
//     },
// };

// console.log(person.age);

// person.age = 50;
// console.log(person.birthYear);

// person.age = 160; // does not allow this value
// console.log(person.birthYear);

// ****************************************************************

// const hotel = {
//     brand: "Hotel Clarusway",
//     categories: ["Spa", "Swimming Pool", "Resort"],
//     options: ["just stay", "free breakfast", "all inclusive"],
//     rooms: ["2-bed", "3-bed", "4-bed"],
//     receptionHours: {
//         mon: {
//             open: 8,
//             close: 22,
//         },
//         fri: {
//             open: 9,
//             close: 21,
//         },
//         sat: {
//             open: 10,
//             close: 20,
//         },
//     },

//     reservation(arrival, departure, optionIndex = 0, roomIndex = 0) {
//         console.log(`${this.rooms [roomIndex]} is booked with ${this.options [optionIndex]} between ${arrival}-${departure}`);
//     },

//     book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0}) {
//     console.log(`${this.rooms [roomIndex]} is booked with ${this .options [optionIndex]} between ${arrival} - ${departure}`);
//     },
// };

//                                       Object Destructuring


// const { brand, options } = hotel;

// console.log(brand);
// console.log(options);
// console.log(options[1]);

// const { brand: hotelName, rooms: roomTypes } = hotel;
// console.log("hotel name is", hotelName);

// const { receptionHours: { mon: Monday }, }= hotel;
// console.log(Monday);

// const openingFriday1 = hotel.receptionHours.fri.open;
// const closingFriday1 = hotel.receptionHours.fri.close;


// hotel.reservation("11:00", "23:00", 0, 0);

// // above and below codes executes the same output

// hotel.book({  // this code is much better in term of readability
//     roomIndex: 0,
//     departure: "22:30",
//     optionIndex: 1,
//     arrival: "09:30",
// });


//                                            Array Destructuring

// const date = [1970, 4, 20];

// // traditional way

// const year = date [0];
// const month = date [1];
// const day = date [2];

// const [Year, Month, Day] = date;
// console. log (Day, Month, Year);

// const [year2, , day2] = date;
// console.log("year2 :» ", year2);
// console.log("day2 :»> ", day2);

const nestedArray = [1, 2, 3, [4, 5, 6], 7];

const [first, , third, [forth, fifth], seventh] = nestedArray;
console.log('fifth :»', fifth);
console.log(nestedArray [3][2]);

const note = {
    id: 1,
    title: 'My first note', 
    date: '25/04/1977',
};

