console.log("Function Wacky");

var gym = 400;
var entree = 750;
var soda = 200;
var dailyGoal = 500;

var calorieCount = function(entree, soda, gym) {// begin function with three parameters
    var calorieTotal = entree + soda; // add parameters
    var dailyCalorie = calorieTotal - gym; // subtract gym calories
    return dailyCalorie; // return total generated
};// end of function
var number = calorieCount(entree, soda, gym);//calling all calories
console.log("I have taken in " + number + " calories after my gym session");// console out calories taken in
if (number < dailyGoal) {//begin if statement
    console.log("You need to continue working out to reach your goal.");// console log out answer
} else {//begin else
    console.log("Great job you have reached your goal, you burned " + number + " calories today.")
}






