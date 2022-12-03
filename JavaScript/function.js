const person = {
    fisrtName: "Alperen",
    lastName: "akdogan",
    birthYear: 2021,
    skills: ["JS", "Python", "CSS"],
    employed: false,

    calculateAge2() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

};

console.log(person.calculateAge2());
console.log(person.age);
