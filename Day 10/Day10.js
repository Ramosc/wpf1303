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
var pickACar = function(cars) {
    var carNumber = 0;
    while (carNumber < cars.length){
        var car = cars[carNumber];
        if (car.mpg >= 20 && car.miles <= 70000){
            return car;
        }
        carNumber ++
    }
    return false;
};
var carSelected = pickACar(choices);
console.log(carSelected);
