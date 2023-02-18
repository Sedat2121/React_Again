// 1. Create a function that takes a number as an argument. Add up all 
// the numbers from 1 to the number you passed to the function.

// solution1
/*
function addUp(num) {
    return (num*(num+1)/2);
}
console.log(addUp(4));
console.log(addUp(600));
*/
// solution2
/*
function addUp(num) {
    let result = 0;
    for(let i =0; i<= num; i++) {
        result = result + i;
    }
    return result;
}
console.log(addUp(5));
console.log(addUp(600));
*/

// 2. Create a function that takes a number (step) as an argument 
// and returns the number of matchsticks in that step.
/*
function matchHouses(step) {
    return ((step*6)-(step-1));
}

console.log(matchHouses(33));
*/

// 3. Write a function that mimics (without the use of <<) the left shift 
// operator and returns the result from the two given integers.
/*

function shiftToLeft(x, y) {
    // return (x * (Math.pow(2, y)));
    return (x * (2 ** y));
}

console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-128, 3));
*/

// 3. Create a function that takes an array of numbers 
// and return both the minimum and maximum numbers, in that order.
// solution1
/*
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for(i=0; i<arr.length; i++) {
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return [min, max];
}

console.log(minMax([1, 5, 7, 9, 13])); */

//Solution2
/*
function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let curr of arr) {
        if (curr > max) {
            max = curr;
        }
        if (curr < min) {
            min = curr;
        }
    }
    return {min, max};
}
console.log(getMinMax([1, 5, 9, 34]));
*/

// Solution3
/*
function minMax(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    return {
        min: sortedArray[0],
        max: sortedArray[sortedArray.length - 1]
    }
}

console.log(minMax([33, 56, 78, 1])); */

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse()); */

// 4. Your function will be passed two functions, f and g, 
// that don't take any parameters. Your function has to call them,
// and return a string which indicates which function returned the larger number.
/*
function whichIsLarger(f, g) {
    if(f>g){
        return "f";
    }else if(g>f){
        return "g";
    }else 
    return "neither";
}

console.log(whichIsLarger(() => 25, () => 15));
console.log(whichIsLarger(() => 25, () => 25));
console.log(whichIsLarger(() => 505050, () => 5050));
console.log(whichIsLarger(() => 25,  () => 5)); */


// 5. Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number.
/* function binary(decimal) {
    return  parseInt(decimal, 2);
}

console.log(binary("101101")); */

// 6. Create a function that returns true if the first array can be nested inside the second and false otherwise.
/*function canNest(arr1, arr2) {
    let a = Math.min.apply(Math, arr1);
    let b = Math.max.apply(Math, arr1);
    let c = Math.min.apply(Math, arr2);
    let d = Math.max.apply(Math, arr2);

    if(a>c && b<d) 
    return true;
    else
    return false;
}

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([1, 2, 3, 4], [2, 3])); */

// 7. Create a function that calculates the number of different squares in an n * n square grid. 
/*function numberSquares(n) {
    return ((n*(n+1)*((2*n)+1))/6);
}

console.log(numberSquares(4));
console.log(numberSquares(5)); */

// 8. Create a function that takes an array of values resistance that are connected in series, 
// and calculates the total resistance of the circuit in ohms.
// solution1:
/*function seriesResistance(arr) {
    return arr.reduce((a, b)=> {return a + b;})
}

console.log(seriesResistance([1, 4, 7, 11])); */

//solution2
/*function seriesResistance(arr) {
    let sum = 0;
    for (let i in arr) {
        sum += arr[i];
    }
    return sum;
}

console.log(seriesResistance([1, 4, 7, 11])); */

// 9. Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
/*function largestSwap(num) {
    let a = num/10; // first number
    let b = num%10; // second number
    let swap = (b*10)+a; // reversed number
    if(swap>=num)
    return true;
    else
    return false;
}

console.log(largestSwap(34));
console.log(largestSwap(76));
console.log(largestSwap(99)); */

/* 10. Write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order. */
/*function detectWord(str) {
    let word = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLowerCase()) {
            word += str[i];
        }
    }
    return word;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); */

// 11. Create a function that will take a HEX number and returns the binary equivalent (as a string).
/*function toBinary(num) {
    return (parseInt(num, 16).toString(2)).padStart(8, '0');
}

console.log(toBinary(0xFF));
console.log(toBinary(0xAA));
console.log(toBinary(0xFA)); */


/* 12. Create a method in the Person class which returns how another 
person's age compares. Given the instances p1, p2 and p3, which will 
be initialised with the attributes name and age, return a sentence
in the following format:
{other person name} is {older than / younger than / the same age as} me.
*/
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
    	
    	
    }
}
*/

/* 13. You will be given an array of drinks, 
with each drink being an object with two properties: 
name and price. Create a function that has the drinks 
array as an argument and return the drinks objects sorted 
by price in ascending order. */
/*function sortDrinkByPrice(drinks) {
    drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10},
        {name: "coffee", price: 5},
        {name: "tea", price: 5},
        {name: "horchata", price: 75},
        {name: "milk", price: 25},
    ];
    return drinks.sort((a, b) => (a.price > b.price) ? 1 : -1);
}

console.log(sortDrinkByPrice()); */

// 14. Create a function that takes two arrays and insert 
// the second array in the middle of the first array.
/* function tuckIn(arr1, arr2) {
        let a = [arr1.shift()];
        let b = [arr1.pop()];
        for (let i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);
        };
        arr1.push(b[0]);
        for (let n = 0; n < arr1.length; n++) {
            a.push(arr1[n]);
        };
        return a;
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])); */

// 15. Create a function to return the amount of potatoes there are in an array.

/* function potatoes(arr) {
	let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==="potato")
        counter++;
    }
    return counter;
}

console.log(potatoes(["apple", "potato", "orange", "potato"])); */

// 16. Create a function that returns whether the first array is slightly superior to that of the second.
/* function isFirstSuperior(arr1, arr2) {
    let result;
	for (i in arr1){
        for (j in arr2) {
            if(arr1[i] > arr2[j]) {
                result = true;
            }else
            result = false;
        }
    }
    return result;
}

console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]));
console.log(isFirstSuperior(["a", "b", "c"], ["a", "d", "c"]));
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 1, 1])); */

// 17. Create a function that takes two strings as arguments and returns the number of times the 
// first string (the single character) is found in the second string.
/* function charCount(myChar, str) {
	let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (myChar === str[i]){
            counter += 1;
        }
    }
    return counter;
}

console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
console.log(charCount("a", "edabit is such an awesome website where you can learn more about js")); */

/* 18. Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
function flip(y) {
	return (y + 1) % 2;
}

console.log(flip(0));
console.log(flip(1)); */

/* 19. Given a number, return an array containing the two halves of 
the number. If the number is odd, make the rightmost number higher.

function numberSplit(n) {
	if (n === undefined){
        return "Input must be a number";
    }
    let a = Math.floor(n/2);
    let b = n - a;
    let result = [];
    result.push(a, b);
    return result;
}

console.log(numberSplit(21));
console.log(numberSplit(-9));
console.log(numberSplit(0));
console.log(numberSplit()); */

// 20. Create a function that takes an array of non-negative integers
//  and strings and return a new array without the strings.
/*function filterArray(arr) {
	const number = arr.filter(function (num) {
        if(typeof num != 'string')
        return num;
    });
    return number;
}

console.log(filterArray([1, "a", "b", 0, 15])); */


