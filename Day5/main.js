console.log("main.js");

var names = [ "Vid", "Scott", "Joe", "Eric", "Lee" ];// array
console.log(names);

var firstGuy = names[0];
console.log(firstGuy);

var guyCount = names.length;// always one more than the last element
console.log("There are " + guyCount + " guys in the back row.");

var lastGuy = names[names.length - 1];
console.log("The last guy is " + lastGuy);

var middleNumber = Math.floor(names.length / 2); // floor because arrays only understand whole numbers
var middleGuy = names[middleNumber];
console.log(middleGuy);

