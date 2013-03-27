console.log("Industry Functions");


var booksNeeded = 5;//books needed / ordered

var learning = function(price) {// begin function
    var amountOfBooks = 0;//book amount
    while (amountOfBooks < booksNeeded) {
        var answer = "Do I need more books? " + ((amountOfBooks) ? " Yes I need more books!" : "No I have books");
        amountOfBooks++;
        console.log(answer);
    }
    return price * amountOfBooks;
};
var total = learning(10);
console.log("After " + booksNeeded + " trips im glad you finally enough books.");
console.log("The price for " + booksNeeded  + " book to learn web development will be " +  total);
