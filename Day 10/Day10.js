var choices = [{
    "name"  : "Ranger",
    "mpg"   : 19,
    "miles" : 212000,
    "model" : 1993
},{
    "name"  : "RX330",
    "mpg"   : 20,
    "miles" : 140000,
    "model" : 2004
},{
    "name"  : "Outback",
    "mpg"   : 27,
    "miles" : 42000,
    "model" : 2009
}];
var distance = 30;
var age = 10;
var maintenance = 1000;
var totalCost = function(totalMiles, age, maintenancePerYear, mpg) {
    var gasDollars = mpg * totalMiles;
    var maintenanceDollars = age * maintenancePerYear;
    var tco = gasDollars + maintenanceDollars;
    return  tco;
};
var totalDollars = totalCost(distance, age, maintenance, 15);
console.log("This is the amount I can afford $" + totalDollars);

var pickACar = function(cars) {
    var carNumber = 0;
    while (carNumber < cars.length){
        var car = cars[carNumber];
        var totalDollars = totalCost(distance, age, maintenance, car.mpg);
        if (car.mpg >= 20 && car.miles <= 70000 && totalDollars < 15000) {
            return car;
        }
        carNumber ++
    }
    return false;
};
var carSelected = pickACar(choices);
console.log("This is the car that fits my needs" , carSelected);
