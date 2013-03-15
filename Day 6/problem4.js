alert(4);
//
//A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

var largestPalindrome = 0;
// loop over all numbers
for (var firstNumber = 1 ; firstNumber <= 999 ; firstNumber++) {
    // loop over all numbers ... again!
    for (var secondNumber = 1 ; secondNumber <= 999 ; secondNumber++ ) {
    // multiply them together
    var result = firstNumber * secondNumber;
    //convert to a string
    result += "";
    var isPalindrome = true;
    //see if it is a palindrome
    for (var stringIndex = 0; stringIndex < result.length / 2; stringIndex++ ){
        var firstCharacter = result.charAt(stringIndex);
        var lastCharacter = result.charAt(result.length - stringIndex - 1);
        if (firstCharacter !== lastCharacter) {
            isPalindrome = false;
        }//is is palindrome
    } // for string index
      // if it is, is it the biggest number weve seen?
    if (isPalindrome && (Math.floor(result) > Math.floor(largestPalindrome))) {
        largestPalindrome = result;
        }//if palindrome
    }//for secondNumber
}//for firstNumber
console.log("The largest palindrome is: " + largestPalindrome);