//Calculate the circumference of a circle.
//Parameter(s) for function:
//    Radius of the circle
//Return:
//    Circumference of the circle
//Result to print to the console:
//    “The circumference of the circle is X”;



var pi = 3.14;

var circumference = function(diameter) {
    return diameter * pi;
};
var number = circumference(10);
console.log(number);



var beeSting = 8.666666667;
var animalWeight = 0;

var animal = function(weight) {
    animalWeight = weight;
    return weight * beeSting
};
var pounds = animal(12);
console.log("It takes " + pounds + " to kill an animal that weights " + animalWeight + " pounds.");




