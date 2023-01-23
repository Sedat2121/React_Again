// getElement... methods -> these methods belong to document object of the DOM

documentgetElementById() -
getElementsByClassName() -
getElementsByName() -
getElementsByTagName() -

// querySelect... methods -> hese methods belong to Element object of the DOM

querySelector() -
querySelectorAll();


let element = parentNode.querySelector(selector);

let elementList = parentNode.querySelectorAll(selector);

let nodeList = Array.from(document.querySelectorAll(selector));

let parent = oneNodeInPage.parentNode;

let nextSibling = currentNode.nextElementSibling;

let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;

console.log(firstChild);