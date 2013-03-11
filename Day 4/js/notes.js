console.log("these are my notes");

var phaser = parseInt(prompt("how many phasers?"));
var setting = "stun";

console.log("phasers:" + phaser);
console.log("settings:" + setting);

var atLeast3Phasers = (phaser > 3);
var setToKill = (setting == "kill");

if (atLeast3Phasers || setToKill) {
    console.log("it's dead, jim.");
}else if (setting == "stun") {
    console.log("that won't be enough");
}else {
    console.log("run faster than the red shirt!");
}
