console.log("Industry Functions");


var booksNeeded = 5;

var learning = function(price) {
    var amountOfBooks = 0;
    while (amountOfBooks < booksNeeded) {
        var answer = "Do I need more books? " + ((amountOfBooks) ? " Yes I need more books!" : "No I have books");
        amountOfBooks++;
        console.log(answer);
    }
    return price * amountOfBooks;
};
var total = learning(5);
console.log(total);
