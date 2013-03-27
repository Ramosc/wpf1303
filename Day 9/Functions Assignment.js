var placesToGo = [{
    "name" : "Chilis",
    "price" : 20
},{
    "name" : "Man Of Steel",
    "price"  : 15
},{
    "name" : "Cuba Libre",
    "price" : 30
}];
var spendingLimit = parseInt(prompt("How much do you want to spend during on the date?"));
var date = function(options) {
    return options * 2
};

var bestDeal = spendingLimit(placesToGo);
    while (spendingLimit < bestDeal) {

}
console.log("We should go to" + placesToGo.name + " because it is the best deal");
console.log(placesToGo.name);