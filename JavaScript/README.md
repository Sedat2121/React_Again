# fullStack.cafe JavaScript Interview questions

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
