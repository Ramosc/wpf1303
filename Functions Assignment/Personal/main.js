console.log("Functions Personal");

var placesToGo = [
    {//1st object in array
    "name" : "Chilis",
    "price" : 20
    },
    {//2nd object in array
    "name" : "Man Of Steel",
    "price"  : 15
}];

var date = function(options) {//begin function
    var dateTotal = 0; // var for loop
    options.forEach(function(options) {// start forEach loop
        dateTotal += options["price"];//add prices together for date total
    });// end forEach loop
    return dateTotal * 2 / options.length;// multiply for 2 people and divide objects to get average
};//end function

var dateAvg = Math.round(date(placesToGo));
console.log("If we go to dinner and a movie the price  each of use will have to pay is " + dateAvg);



