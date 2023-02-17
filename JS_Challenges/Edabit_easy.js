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