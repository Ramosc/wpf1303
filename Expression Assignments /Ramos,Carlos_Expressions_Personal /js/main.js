var class1 = parseInt(prompt("How many hours do you spend in WPF 1303 a week?"));
var class2 = parseInt(prompt("How many hours do you spend in College Math a week?"));
var work   = parseInt(prompt("How many hours do you spend at work each week?"));
var total  = class1 +class2 + work

console.log("Time management is very important at a school like Full Sail. The workload at Full Sail can be very difficult at times.");
console.log("Every month your schedule will change and every week even day your schedule can change due to last minute unforeseen circumstances.");
console.log("It is very important to schedule out you time wisely especially if you have a job on top of your classes as I do.");
console.log("I have two classes a month with work and WPF is " + class1 + " hours long. College Math is " + class2 + " hours long as well." );
console.log("I also work " + work + " hours a week and that interferes with how much time I have to finish homework assignments." );
console.log("If you add all of that time up it equals to " + total + " and you can see why it is important to manage your time wisely.");

if (total>=55) {
    console.log( total + " Hours is a lot of time to be taken out of the week and if continues this way there is a possibility you will burn yourself out.")
}



