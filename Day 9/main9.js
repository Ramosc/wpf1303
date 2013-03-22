console.log("hello");

var compareTwo = function(a, b) {
    if (a > b) {return 1;}
    if (a < b) {return -1;}
    return 0;
};
console.log("compare: ", compareTwo(4, 6));
console.log("compare: ", compareTwo(6, 4));
console.log("compare: ", compareTwo(4, 4));

var prices = [2,99, 2.49, 3.09, 9.99, 0.99];
console.log("prices", prices);
var sortedPrices =  prices.sort(compareTwo);
console.log("sorted prices: ", sortedPrices);

//var sortByKey = function (keyName, objectA, objectB) {
//    if (objectA.keyName > objectB.keyName) {return 1;}
//    if (objectA.keyName < objectB.keyName) {return -1}
//    return 0;
//};
//var sortByName = function (objectA, objectB){
//    return sortByKey("name", objectA, objectB);
//};
//var sortByPrice = function (objectA, objectB){
//    return sortByKey("price", objectA, objectB);
//};
//var sortByAisle = function (objectA, objectB) {
//    return sortByKey("aisle", objectA, objectB);
var sortGenerator = function (keyName) {
    console.log("Generating sort for " + keyName);
    return function (objectA, objectB) {
        var valueA = objectA.keyname;
        var valueB = objectB.keyname;
        console.log("comparing " + valueA + " to " + valueB);
        if (valueA > valueB) {return 1;}
        if (valueA < valueB) {return -1;}
        return 0
    };
};
var groceries = [
    { "name": "eggs",   "price": 2.50 , "aisle" : 3 },
    { "name": "milk",   "price": 4.00,  "aisle" : 1 },
    { "name": "butter", "price": 0.99,  "aisle" : 12},
    { "name": "gumball", "price": 0.99,  "aisle" : 12},
    { "name": "fireball", "price": 0.99,  "aisle" : 12},
    { "name": "ringpop", "price": 0.99,  "aisle" : 12}
];
//console.log(groceries);
//console.log("sorted groceries by aisle: ", groceries.sort(sortByAisle));
//console.log("sorted groceries by name: ", groceries.sort(sortGenerator("name")));
//console.log("sorted groceries by price: ", groceries.sort(sortGenerator("price")));

var cheapGroceries = function (groceries) {
    var cheap = [];
    groceries.forEach(function(item){
        if (item.price < 1) {
            cheap.push(item);
        }//if
        });//for each
  return cheap
};
groceries.forEach(function(item, itemNumber) {
         if (itemNumber % 2 !== 0) {
             console.log(item["name"]);
     }
});

var cheap = groceries.filter(function(item) {
    return (item["price"] < 1);
});

console.log("cheap: ", cheap);

var oddGroceries = groceries.filter(function(item, itemNumber) {
    return (itemNumber % 2 !== 0);
});
console.log("odd: ", oddGroceries);
var oddGroceriesNames = oddGroceries.map(function(item){
    return (item.name);
});
console.log("odd: ", oddGroceriesNames);
//console.log(cheapGroceries(groceries));

