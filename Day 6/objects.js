console.log("objects.");

//var objectVariable = { // key-value storage

var me = {
    "Name"    : "Carlos Ramos",
    "Age"     : 25,
    "Music"   : "Skillet",
    "Clothes" : ["Dolphins shirt" , "Grey pants" , "White Shoes"],
    "Classes" : {
        "Class 1" : "WPF",
        "Class 2" : "Math"
    }
};

//var name = me.name; // name = me["name"]
var name = me["name"];
console.log(name);
console.log(me);

//in: checks is a string is in a key in an object
var lookingFor = "Music";
if (lookingFor in me) {
    console.log("My favorite band is " + me[lookingFor]);
} else {
    console.log("30 Seconds to mars");
}

me["awesome"] = true; //add an item to an object using an array bracket syntax
console.log("awesome " + me["awesome"]);

delete me["awesome"]; //remove item from an object using delete
console.log(me);

//loop over object with for..in
for (var keyName in me) {
    var value = me[keyName];
    console.log(keyName + " = " + value);
} //for in

var thingCount = me.length;
console.log("Count " + thingCount); //object.length doesn't work

