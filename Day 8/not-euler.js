console.log("not euler");

var getGroceries = function (money, list) {
    var answer = {
        "change" : 0,
        "groceries" : [],
        "got everything" : true
    };
    var store = {
        "butter" : 0.99,
        "eggs" : 2.99,
        "milk" : 3.99
    };
    var totalCost = 0
    for (var item in list) {
        var howMany = list[item];
        console.log("looking for " + howMany + "" + item);
        if (item in store) {
            var price = store[item];
            console.log("the price of " + item + " is $" + price);
            var howMuch = price * howMany;
            totalCost += howMuch;
            console.log("my total cost is now $" + totalCost);
            answer["groceries"].push(item);
        } else {
            console.log("i cant find the " + item);
            answer["gotEverything"] = false
        }
    }// for
    answer["change"] = money - totalCost;
    return answer;
};//function getGroceries
var groceryList = {
    "eggs" : 1,
    "milk" : 2,
    "flour": 1,
    "butter":4,
    "sugar": 3
};
var response = getGroceries(25, groceryList);
console.log(response);