// 1. Write a function that takes an array of numbers and returns the biggest and smallest in an object.
/*function findBiggestAndSmallest(numbers)  {
    let mini = numbers[0];
    let maxi = numbers[0];

    if (numbers.length === 0){
        return {};
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < mini) {
            mini = numbers[i];
        }
        else if (numbers[i] > maxi) {
            maxi = numbers[i];
        }
    }
    return {maxi, mini};
}

console.log(findBiggestAndSmallest([2, -5, 9, 99]));
console.log(findBiggestAndSmallest([50]));
console.log(findBiggestAndSmallest([])); */

//2. 