console.log("we are in loops");

//var number = Math.round(10 * Math.random());
//console.log(number);

//var guess;
//var isCorrect = false;
//
//while ( !isCorrect ) {
//    guess = parseInt(prompt("what is your guess?"));
//    console.log("your guess " + guess);
//    isCorrect = (guess == number);
//    if (!isCorrect) {
//        alert("wrong!");
//    }
//}

//for ( var isCorrect = false, guess ; !isCorrect ; )
//{// 1st: initializer (setup) ; 2nd: condition ; 3rd: what changes?
//    guess = parseInt(prompt("what is your guess?"));
//    console.log("your guess " + guess);
//    isCorrect = (guess == number);
//    if (!isCorrect) {
//        alert("wrong!");
//    }
//}


var numbers = [ ];
var nextNumber = 1;

while (nextNumber > 0) {
    nextNumber = parseInt(prompt("enter a number, or blank to stop."));
    if (!isNaN(nextNumber)) {
    numbers.push(nextNumber);
    }
}
console.log(numbers);
var smallestNumber = numbers[0];
var largestNumber = numbers[1];
for (var total = 0, i = 0; i < numbers.length ; i = i + 1){ // i += 1
    total += numbers[i]; //total = total + numbers[i];
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }
    if (numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }//if
}//for
console.log("Total " + total);
console.log("Smallest " + smallestNumber);
console.log("largest " + largestNumber);

