////i=0 - start from 0
////i < 1000 - check number from 0 - 1000
////i++ - number + 1
//
////Problem 1
//var total = 0 ;
//
//for (var i = 0; i < 1000; i++) {
//    if ((i % 3 == 0) || (i % 5 == 0)){
//        total += i;
//    }
//}
//console.log(total);
//
////Problem 2
//var max = 4000000;
//var a = 1;
//var b = 2;
//var c = 0;//accumulator
//var evenfib = [];
//var total2 = 0;
//
//
//while (a < max){
//    if (a % 2 == 0){
//        total2 += a;
//        evenfib.push(a);
//    }
//   c = a + b;
//   a = b;
//   b = c;
//}
//console.log(total2);

// Problem 5

//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//
//find smallest number divisible by every number from 1 - 20
//

//were going to start at 1 and keep looking for number
var foundIt = false;
var number = 1;
var target = 20;
while (!foundIt) { //keep looking until we found the right number
    // looop from 1 to 10 (or 20)
    var gotRemainder = false; // assume no remainders
    for (var i = 1; (i <= target) && !gotRemainder; i++) { // try each number
        // check for remainders
        gotRemainder = ((number % i) !== 0);
    }
    // if no remainders ever
    if (!gotRemainder) {// if we never got any remainders
        // this is the number we want
        foundIt = true;//we found iot
    } else {//try the next number
        number++;
    }
}
console.log(number);








