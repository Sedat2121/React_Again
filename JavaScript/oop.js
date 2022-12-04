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


 //  prototypes
function Pet (name, age) {
    this.name = name;
    this.age = age;   
}

Pet.prototype.walk = function () {
    console.log('I am walking');
};

Pet.prototype.speak = function () {
    return 'I like humans';
};

const myPet2 = new Pet('Karabas', 4);
console. log (myPet2);

function Cat (name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

Cat.prototype = Object.create (Pet.prototype); // binding Cat -- Pet

const pisi = new Cat('Pisi', 1, 'yellow');
console.log (pisi);
pisi.walk();
