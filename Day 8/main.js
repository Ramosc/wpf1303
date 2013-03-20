console.log("Functions");

// this code finds the factors (divisors) of a number
//var targetNumber = 2520;

var getFactors = function (targetNumber) {//called parameter

    var factors = [];
    for (var currentNumber = 2; currentNumber < targetNumber; currentNumber++) {
        if ((targetNumber % currentNumber) == 0) {
            factors.push(currentNumber);
        }// if no remainder
    }// for currentNumber
    return factors;//return gives a value back where the function was called
};// function getFactors
var isPrime = function(someNumber) {
    var allFactors = getFactors(someNumber);// function can call other functions
    if (allFactors.length == 0) {
        return true;
    } else {
        return false;
    }
};// function isPrime

console.log("The number 13 is prime: ", isPrime(13));
console.log("The number 13 is prime: ", isPrime(8));
var factorsOf1234567 = getFactors(1234567);
console.log("The factors of " + 1234567 + " are:", factorsOf1234567);//called arguments
var factorsOf2520 = getFactors(2520);
console.log("The factors of " + 2520 + " are:", factorsOf2520);

// *Basic building blocks of function*
//1. Functions are just variables
//2. Functions have parameters that accept arguments
//      a. parameters are variables that the function must have to work
//      b. arguments are the values given to function that become the parameters
//3. Functions have a block of code that runs when they are called
//      (which can be as simple or complex as you need them to be)
//4. Functions MAY return a value that takes the place of where the function was called
//      a. We call functions with parentheses: ()
//5. Function provide ENCAPSULATION, which means:
//      the code outside doesn't care about the code inside
//      (we can change the inside without worrying if the outside will break)
//      a. Variables made inside of functions are not viewable from the outside
//      b. Variables OUTSIDE are visible from the inside // SCOPE
//6. Functions should do ONE thing, and do it well
//      a.ONE thing is easier to debug when there are problems
//      b.ONE thing is easier to optimize if it needs to go faster, be better, etc
//      c.One thing is easier to reuse in other places
//      d.Functions_should_ take up one screen and no more (rule of thumb)



