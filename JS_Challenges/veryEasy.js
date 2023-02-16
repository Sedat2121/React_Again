// 16. Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
	return voltage * current;
}

console.log("power= " + circuitPower(3, 4) + " Watts");

// 17. Create a function that takes a number as its only argument and 
// returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
	if (num <= 0){
        return true;
    }else
    return false;
}
console.log(lessThanOrEqualToZero(9));
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(-1));
console.log(lessThanOrEqualToZero(0));

// 18. A student learning JavaScript was trying to make a function. 
// His code should concatenate a passed string name with string "Edabit" 
// and store it in a variable called result. He needs your help to fix this code.
function nameString(name){
	let b = "Edabit";
	let result = name + b;
    return result;
}
console.log(nameString("Love coding with "));

// 19. Create a function that takes the number of wins, draws and losses and 
// calculates the number of points a football team has obtained so far.
function footballPoints(wins, draws, losses) {
	return (wins*3 + draws*1 + losses*0);
}
console.log(footballPoints(5, 3, 2));
console.log(footballPoints(1, 5, 9));

// 20. Create a function that takes three arguments prob, prize, 
// pay and returns true if prob * prize > pay; otherwise return false.
//  net_outcome = probability_of_winning * prize - cost_of_playing.
function profitableGamble(prob, prize, pay) {
	if(prob * prize > pay){
        return true;
    }else
    return false;
}
console.log(profitableGamble(3, 5, 2));
console.log(profitableGamble(1, 4, 10));

// 20 Very Easy questions are completed.