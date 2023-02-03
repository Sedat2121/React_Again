// // getElement... methods -> these methods belong to document object of the DOM

// documentgetElementById() -
// getElementsByClassName() -
// getElementsByName() -
// getElementsByTagName() -

// // querySelect... methods -> hese methods belong to Element object of the DOM

// querySelector() -
// querySelectorAll();

// // Examples
// let element = parentNode.querySelector(selector);

// let elementList = parentNode.querySelectorAll(selector);

// let nodeList = Array.from(document.querySelectorAll(selector));

// let parent = oneNodeInPage.parentNode;

// let nextSibling = currentNode.nextElementSibling;

// let content = document.getElementById('menu');
// let firstChild = content.firstChild.nodeName;

// console.log(firstChild);

// // Examples2
// let content2 = document.getElementById('menu2');
// console.log(content.firstElementChild);

// let div = document.createElement('div');
// div.innerHTML = '<p>CreateElement example</p>';
// document.body.appendChild(div);