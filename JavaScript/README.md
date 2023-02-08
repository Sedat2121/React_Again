# fullstack.cafe JavaScript Interview questions

1. What is typeof operator?
JavaScript provides a typeof operator that can examine a value and tell you what type it is:
JS datatypes are: undefined, string, number, boolean, object(object, array, date), null, symbol, bigint. 


2. What is the Object type?
It refers to a compound value where you can set properties that each hold their own values of any type. 
```
var obj = {
	a: "hello world", // property
	b: 42,
	c: true
};

obj.a;		// "hello world", accessed with doted notation
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world", accessed with bracket notation
obj["b"];	// 42
obj["c"];	// true
```
Bracket notaion is also useful if you want to access a property/key pair.

3. Explain arrays in JS
An array is an object that holds values of any type not particelarly in named property/key, but rather in numarically indexed positions: 

```
var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

typeof arr;		// "object" 
```
Arrays are used to store multiple values in a single variable.

4. What is Scope in JS?
There are two pyte of scopes; local and global.
a scope refers to the current context of code, which determines the accessibility of variables to JS. 

Scope determines the accessiblity of variables, objects ,and functions from different parts of the scope. 

5. Explain equality in JS
Strict comparison (===); checks the value equality without allowing coercion

Abstract comparion (==); checks the value equality with allowing coercion
```
var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
```

6. Explain what is Binary Search in JS?
Binary search : Half-interval search, Logarithmic search.

Binary search is used for any element in a sorted array. Its much faster than linear search. 
```
var binarySearch = function(array, value) {
    var guess,
        min = 0,
        max = array.length - 1;	

    while(min <= max){
        guess = Math.floor((min + max) /2);
	if(array[guess] === value)
	    return guess;
	else if(array[guess] < value)
	    min = guess + 1;
	else
	    max = guess - 1;	
     }
	
     return -1;
}
```

7. What is Linear Search and when may we use one?
this is the most basic search algorithm. Given a data structure, for example an array, 
we search for an item by looking at all the elements, until we find it. 
```
function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }
  return -1;
}
```

8. Explain Values and Types in JS
JS has 5 data types that are passed by values: boolean, null, undefined, string, and number. 
JS has 3 data types that are passed by reference: array, function, and object.

9. What is let keyworld in Js?
Let allows us to declare variables that are limited to the scope of a block statement.
It is a block declaration method, unlike var which is a global declaration method

10. Explain null and undefined in JS
Null; an empty value and also a primitive type in js. the variable which has been assigned as null contains no value. 
something is corrently unavaible.

Undefined; means the variable has been declared, but its value has not been assigned. 
something has not been initialized.

11. What is Strict mode? 
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
```
// Non-strict code...

(function(){
  "use strict";

  // Define your library strictly...

})();

// Non-strict code...
```

12. What is a Polyfill? 
It refers to a JS library that implements an HTML5 or CSS web standard, either an established standard on older browser, or a proposed standard on existing browsers.

A polyfill is essentially the specific code (or plugin) that would allow you to have some specific functionality that you expect in current or “modern” browsers to also work in other browsers that do not have the support for that functionality built in.

Polyfills are not part of the HTML5 standard
Polyfilling is not limited to Javascript.

13. Explain event bubbling and how one may prevent it?
When an element receives an event, and that event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element. 

Event bubbling is the concept in which an event triggers at the deepest possible element, and triggers on parent elements in nesting order. As a result, when clicking on a child element one may exhibit the handler of the parent activating.
One way to prevent event bubbling is using event.stopPropagation() or event.cancelBubble on IE < 9.

14. What does "use strict" do? 
it directive enables Jacascript's strict mode which was introduce in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.

15. What language constructions do you use for iterating over object properties and array items?
```
For objects:

for loops - for (var property in obj) { console.log(property); }. However, this will also iterate through its inherited properties, and you will add an obj.hasOwnProperty(property) check before using it.
Object.keys() - Object.keys(obj).forEach(function (property) { ... }). Object.keys() is a static method that will lists all enumerable properties of the object that you pass it.
Object.getOwnPropertyNames() - Object.getOwnPropertyNames(obj).forEach(function (property) { ... }). Object.getOwnPropertyNames() is a static method that will lists all enumerable and non-enumerable properties of the object that you pass it.
For arrays:

for loops - for (var i = 0; i < arr.length; i++). The common pitfall here is that var is in the function scope and not the block scope and most of the time you would want block scoped iterator variable. ES2015 introduces let which has block scope and it is recommended to use that instead. So this becomes: for (let i = 0; i < arr.length; i++).
forEach - arr.forEach(function (el, index) { ... }). This construct can be more convenient at times because you do not have to use the index if all you need is the array elements. There are also the every and some methods which will allow you to terminate the iteration early.
Most of the time, I would prefer the .forEach method, but it really depends on what you are trying to do. for loops allow more flexibility, such as prematurely terminate the loop using break or incrementing the iterator more than once per loop.
```

16. Why is it, in general, a good idea to leave the global scopeof a website as-is and never touch it?
Every script has access to the global scope, and if everyone uses the global namespace to define their variables, collisions will likely occur. Use the module pattern (IIFEs) to encapsulate your variables within a local namespace.

17. Why would you use the load event? advantages? alternatives?
The load event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

The DOM event DOMContentLoaded will fire after the DOM for the page has been constructed, but do not wait for other resources to finish loading. This is preferred in certain cases when you do not need the full page to be loaded before initializing.
