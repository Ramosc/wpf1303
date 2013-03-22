console.log("euler1");

var isMultipleOf = function (largerNumber, smallerNumber) {
    var isIt = (largerNumber % smallerNumber) == 0;
    return isIt;
};

var euler1 = function(targetNumber) {
    // parameters are the thing we need to do the work
    var answer = 0;
    // loop from 1 to 1000
    for (var currentNumber = 1; currentNumber < targetNumber; currentNumber++) {
        // is it a multiple of 3 or 5
        if (isMultipleOf(currentNumber, 3) || isMultipleOf(currentNumber, 5)) {
            // YES: add it up
            answer += currentNumber;
        }//if
    }// for currentNumber
    return answer;
};//function euler1

var answerFor1000 = euler1(1000);
console.log("The answer for 1000 is: ", answerFor1000);

