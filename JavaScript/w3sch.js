// Finding HTML Elements by CSS Selectors

// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;


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
    const cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let ccount = 0;
    if(cstr === ""){
        console.log("Nothing found!")
        return false;
    }
    // Check if the length of the string is even or odd 
    if((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        if(cstr.length === 1){
            console.log("Entry ia a palindrome");
            return true;
        } else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    // Loop through to check the first character to the last character and then move next
    for(let x = 0; x < ccount; x++) {
        if(cstr[x] != cstr.slice(-1-x)[0]) {
            console.log("Entry is not a palindrome");
            return false;
        }
    }
    console.log("The entry is a palindrome")
    return true;
}
isPalindrome("");
isPalindrome("none");
isPalindrome("true");
isPalindrome("nurses run");

// 3. Write a JavaScript function that generates all combinations of a string
function substrings(str1) {
    const array1 = [];
    for(let x=0, y=1; x<str1.length; x++, y++) {
        array1[x] = str1.substring(x, y);
    }
    const combi = [];
    let temp = "";
    const slent = Math.pow(2, array1.length);

    for(let i=0; i<slent; i++) {
        temp = "";
        for(let j=0; j<array1.length; j++) {
            if(i&Math.pow(2, j)) {
                temp += array1[j];
            }
        }
        if(temp !== ""){
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}
substrings("dog");

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order
function order(str) {
    return str.split('').sort().join('');
}
console.log(order("alperen"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function upper(str) {
    let array = str.split(' ');
    let newarray = [];

    for(let i = 0; i < array.length; i++) {
        newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    }
    return newarray.join(' ');
}
console.log(upper("the quick brown fox"));

// 