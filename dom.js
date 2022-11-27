// DOM Accessing

let first_name = document.getElementById("first_name");  // accessing an element by its id

let class_name = document.getElementByClassName("first_name"); // accessing an element by its class name

// getElement(s)ByClassName will return a collection of html element(s) even if there is only one element by thet name.

let class_name1 = document.getElementsByClassName("first_name")[0];  // accessing first element of the collection

let name1 = document.getElementByName("first_name");  // accessing an element by its name

let name2 = document.querySelector("#first_name"); // accessing an element by its name with querySelector (with id attribute)

let name3 = document.querySelector(".first_name"); // accessing an element by its name with querySelector (with class attribute)

let name4 = document.querySelector(".first_name"); // will return first element only even if there are more elements with the same name

