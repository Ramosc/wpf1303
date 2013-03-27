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
    var dateTotal = 0;
    options.forEach(function(options) {
        dateTotal += options["price"];
    });
    return dateTotal * 2 / options.length;
};

var dateAvg = Math.round(date(placesToGo));
console.log("If we go to dinner and a movie the price  each of use will have to pay is " + dateAvg);



