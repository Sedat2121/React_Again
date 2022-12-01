// DOM Accessing

let first_name = document.getElementById("first_name");  // accessing an element by its id

let class_name = document.getElementByClassName("first_name"); // accessing an element by its class name

// getElement(s)ByClassName will return a collection of html element(s) even if there is only one element by thet name.

let class_name1 = document.getElementsByClassName("first_name")[0];  // accessing first element of the collection

let name1 = document.getElementByName("first_name");  // accessing an element by its name

let name2 = document.querySelector("#first_name"); // accessing an element by its name with querySelector (with id attribute)

let name3 = document.querySelector(".first_name"); // accessing an element by its name with querySelector (with class attribute)

let name4 = document.querySelector(".first_name"); // will return first element only even if there are more elements with the same name

let name5 = document.querySelector("[name='first_name']");  

let name6 = document.querySelector("input[name=first_name]");  

let name7 = document.querySelectorAll(".div"); // will return all elements with this "div" class name, a NodeList will be return 



// getElementByClassName returns a HTML collection,
// getElementByName returns a NodeList,
// querySelectorAll returns a NodeList.



// Property vs Attributes.  -----------------------------------------------------------------------------------------------------

name1.getAttribute("id"); // will return the name of "id" attribute

name1.getAttribute("class"); // will return the name of "class" attribute

// getAttribute will display only,

name2.setAttribute("id", "new_name"); 

// setAttribute will change the value of the element. "id" value will be "new_name".

name3.setAttribute("type", "radio"); // new type of the element will be "radio".



// innerHTML, innerText, textContent, and (input=>)value  -------------------------------------------------------------------------

let headerDiv = document.getElementById("headerId");

console.log("innerHTML =>", headerDiv.innerHTML);
console.log("innerText =>", headerDiv.innerText);
cglog.info("textContent =>", headerDiv.inner);



// innerHTML => will return all elements in this div
// innerText => will return the output content next to each other without any Styling
// textContent => will return the output with its styling applied.

name3.value = "Alperen";
// name3.setAttribute("value", "Alperen");


// Hands-on:

let fullName = document.querySelector("#full_name");
fullName.value = `${name3.value.toUpperCase()} ${name4.toUpperCase()}`;

let email = document.getElementById("email");
email.value = `${name5.value.toLowerCase()}.${name6.value.toLowerCase()}@gmail.com`;


// Creating an element in HTML 

let logo = document.createElement("img");

logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");

headerDiv.appendChild(logo); // will display the created logo

headerDiv.innerHTML += '<img src="img/logo.png" alt="bank logo" class="nav_logo" id="logo" />'; // this will do the same thing as above line.

let new_file = document.createElement("harun_Pasa");
