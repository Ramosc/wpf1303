console.log("Function Wacky");

var gym = 400;
var entree = 750;
var soda = 200;
var dailyIntake = 700;

var calorieCount = function(entree, soda, gym) {// begin function with three parameters
    var calorieTotal = entree + soda;
    var dailyCalorie = calorieTotal - gym;
    return dailyCalorie;
};
var number = calorieCount(entree, soda, gym);
console.log("I have taken in " + number + " calories after my gym session");

if (number < dailyIntake) {
    console.log("You need to continue working out to reach your goal.");
} else {
    console.log("Great job you have reached your goal, you burned " + number + " calories today.")
}





