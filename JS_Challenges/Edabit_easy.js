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
