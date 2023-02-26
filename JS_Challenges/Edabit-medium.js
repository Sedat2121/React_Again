// 1. Create a function which returns the number of true values there are in an array.
/* function countTrue(arr) {
    let counter = 0;
    if(arr.length === 0)
            return 0;
	for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            counter += 1;
        }
        
    }
    return counter;
}

console.log(countTrue([true, false, true, false, true])); */


// 2. Write a function redundant that takes in a string str and returns a function that returns str.
/* function redundant(str) {
	function innerfun(){
        return str;
    }
    return innerfun();
}
	
console.log(redundant("apple"));
console.log(redundant("alperen")); */



// 3. Create a function that will return an integer number corresponding 
// to the amount of digits in the given integer num.
/*function num_of_digits(num) {
	let count = 0;
    while (num != 0) {
        num = Math.floor(num / 10);
        count += 1;
    }
    return count;
}

console.log(num_of_digits(23837463)); */

// 4. Create a function that takes your position a and your friend's 
//position b and returns a boolean representation of whether 
//it's possible to earn a bonus on any die roll.
/*function possibleBonus(a, b) {
    if(a === b || a+6 < b || a>b) {
        return false;
    }else if(b-a <= 6 ) {
        return true;
    }
}

console.log(possibleBonus(3, 2));

console.log(possibleBonus(3, 3));

console.log(possibleBonus(3, 5));

console.log(possibleBonus(1, 9));

console.log(possibleBonus(1, 7)); */


// 5. Create a function that takes numbers b and m as arguments and 
//returns the derivative of the function f(x)=x^b with respect
// to x evaluated at x=m, where b and m are constants.
/* function derivative(b, m) {
	return b * Math.pow(m, b-1);
}

console.log(derivative(1, 4));
console.log(derivative(3, -2));
console.log(derivative(4, -3)); */


// 6. Create a function that takes an integer n and returns the nth tetrahedral number.
function tetra(n) {
	return (n * (n + 1) * (n + 2)) / 6;

}

console.log(tetra(2));
console.log(tetra(5));