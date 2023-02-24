// 1. Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
    let counter = 0;
	for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            counter++;
        }
        if(arr.length = 0)
            return 0;
    }
    return counter;
}

console.log(countTrue([true, false, true, false]));










// 2. Write a function redundant that takes in a string str and returns a function that returns str.












// 3. Create a function that takes your position a and your friend's 
// position b and returns a boolean representation of whether it's 
// possible to earn a bonus on any die roll.














// 4. Create a function that will return an integer number corresponding 
// to the amount of digits in the given integer num.