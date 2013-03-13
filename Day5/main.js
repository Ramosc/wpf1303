console.log("main.js");

//var names = [ "Vid", "Scott", "Joe", "Eric", "Lee" ];// array
//console.log(names);
//
//var firstGuy = names[0];
//console.log(firstGuy);
//
//var guyCount = names.length;// always one more than the last element
//console.log("There are " + guyCount + " guys in the back row.");
//
//var lastGuy = names[names.length - 1];//get the last element
//console.log("The last guy is " + lastGuy);
//
//var middleNumber = Math.floor(names.length / 2); // floor because arrays only
//var middleGuy = names[middleNumber]; // understand whole numbers
//console.log(middleGuy);

//================

var numbers = [2, 5, 7, 11, 13, 15];
var favoriteNumber = parseInt(prompt("what is your favorite number?"));
console.log("Favorite " + favoriteNumber);

//numbers.push(favoriteNumber); // add something to the END of an array
//numbers.unshift(favoriteNumber); // add something to the BEG. of an array
//number.shift(); //takes form the BEG
//numbers.pop(); //takes from the END

var firstNumber = numbers.shift();
var lastNumber = numbers.pop();
console.log(numbers);
console.log("First " + firstNumber);//remove and keep the beginning of array
console.log("Last " + lastNumber); //remove and keep the end of array

numbers[numbers.length - 1] = "Carlos"; // change by assigning to the element
console.log(numbers);

//get just a few things
var first2numbers = numbers.slice(0, 2);
console.log("first 2 ", first2numbers);

//remove just the second element
numbers.splice(1, 1);
console.log(numbers);

//insert into the array
numbers.splice(1, 0, "this is the new second element");
console.log(numbers);



