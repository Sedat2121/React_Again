// JavaScript functions

// 1. Write a JavaScript function that reverse a number
function reverse(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse(123789));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(str_entry) {
    // Change the string into lower case and remove  all non-alphanumeric characters
    const cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    let ccount = 0;
    if (cstr === "") {
        console.log("Nothing found!");
        return false;
    }
    // Check if the length of the string is even or odd
    if (cstr.length % 2 === 0) {
        ccount = cstr.length / 2;
    } else {
        if (cstr.length === 1) {
            console.log("Entry ia a palindrome");
            return true;
        } else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    // Loop through to check the first character to the last character and then move next
    for (let x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            console.log("Entry is not a palindrome");
            return false;
        }
    }
    console.log("The entry is a palindrome");
    return true;
}
isPalindrome("");
isPalindrome("none");
isPalindrome("true");
isPalindrome("nurses run");

// 3. Write a JavaScript function that generates all combinations of a string
function substrings(str1) {
    const array1 = [];
    for (let x = 0, y = 1; x < str1.length; x++, y++) {
        array1[x] = str1.substring(x, y);
    }
    const combi = [];
    let temp = "";
    const slent = Math.pow(2, array1.length);

    for (let i = 0; i < slent; i++) {
        temp = "";
        for (let j = 0; j < array1.length; j++) {
            if (i & Math.pow(2, j)) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}
substrings("dog");

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order
function order(str) {
    return str.split("").sort().join("");
}
console.log(order("alperen"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function upper(str) {
    let array = str.split(" ");
    let newarray = [];

    for (let i = 0; i < array.length; i++) {
        newarray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return newarray.join(" ");
}
console.log(upper("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
function longest(str) {
    let array = str.match(/\w[a-z]{0,}/gi);
    let result = array[0];

    for (let x = 1; x < array.length; x++) {
        if (result.length < array[x].length) {
            result = array[x];
        }
    }
    return result;
}
console.log(longest("front end web developer"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
function vowel_count(str1) {
    const vowel_list = "aeiouAEIOU";
    let vcount = 0;

    for (let x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));

// 8.  Write a JavaScript function that accepts a number as a parameter and check the number is prime or not
function isPrime(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(11));
console.log(isPrime(18));
console.log(isPrime(37));

// 9. Write a JavaScript function which accepts an argument and returns the type
function detect_data_type(value) {
    var dtypes = [Function, RegExp, Number, String, Boolean, Object],
        x,
        len;

    if (typeof value === "object" || typeof value === "function") {
        for (x = 0, len = dtypes.length; x < len; x++) {
            if (value instanceof dtypes[x]) {
                return dtypes[x];
            }
        }
    }

    return typeof value;
}
console.log(detect_data_type("hello"));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix
function matrix(n) {
    var i;
    var j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {
                console.log(" 1 ");
            } else {
                console.log(" 0 ");
            }
        }
        console.log("----------");
    }
}
console.log(matrix(4));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([2, 4, 6, 8, 10]));

// 12. Write a JavaScript function which says whether a number is perfect
function is_perfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
console.log(is_perfect(28));

// 13. Write a JavaScript function to compute the factors of a positive integer
function factors(n) {
    var num_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    num_factors.sort(function (x, y) {
        return x - y;
    });  // numeric sort
    return num_factors;
}
console.log(factors(15));  // [1,3,5,15] 
console.log(factors(16));  // [1,2,4,8,16] 
console.log(factors(17));  // [1,17]

// 14. Write a JavaScript function to convert an amount to coins
function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    }
    else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);
            return [coins[0]].concat(amountTocoins(left, coins));
        }
        else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(86, [25, 10, 5, 2,1]));