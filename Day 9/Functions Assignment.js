var tickets = prompt("How much are movie tickets?");
var entrance = prompt("How much is entrance into the club?");

var date = function(moneySpent) {
    return moneySpent * 2
};
var total = date(tickets);
var total2 = date(entrance);
if (total < total2) {
    console.log("We should go to the movies because the cost of movie tickets is $" + total + " for two tickets");
    } else (total > total2); {
    console.log("We should go dancing because the cost to get into the club is $" + total2);
}

