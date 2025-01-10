//! Palindrome program
function isPalindrome(str) {
    let revstr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revstr += str[i];
    }

    if (str == revstr) {
        console.log("Palindrome");
    } else {
        console.log("Not a palindrome");
    }
}
isPalindrome("sir");
isPalindrome("Madam");
isPalindrome("madam");
isPalindrome("malayalam");


//! Named function
function onemoretime() {
    console.log("Not understood, tell me one more time");
}
onemoretime();


//! Anonymous function
// function() {
//     console.log("Anonymous function");
// }


// Array
// let x = [1, 2, 3, 4];
// console.log(x);


//! function expression
// let a = function {
//     console.log("Function expresson");
// };
// console.log(x);
// a();


//! Immediate invoke function expression
// (
//     function () {
//         console.log("IIFE");
//     }
// )();