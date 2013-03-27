console.log("Industry Functions");


var booksNeeded = 5;//books needed / ordered

var learning = function(price) {// begin function
    var amountOfBooks = 0;//book amount
    while (amountOfBooks < booksNeeded) {//while loop begin
        var answer = "Do I need more books? " + ((amountOfBooks) ? " Yes I need more books!" : "No I have books");// ternary
        amountOfBooks++;// add one to continue loop
        console.log(answer);//console log answer
    }//end loop
    return price * amountOfBooks;//return to get total
};//end function
var total = learning(10);//var for total
console.log("After " + booksNeeded + " trips im glad you finally enough books.");//log out books ordered
console.log("The price for " + booksNeeded  + " book to learn web development will be " +  total);
