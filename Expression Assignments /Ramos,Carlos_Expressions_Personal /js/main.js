var class1 = parseInt(prompt("How many hours do you spend in WPF 1303 a week?"));//amount of hours for WPF
var class2 = parseInt(prompt("How many hours do you spend in College Math a week?"));//amount of hours for Math
var work   = parseInt(prompt("How many hours do you spend at work each week?"));//amount of hours Worked
var total  = class1 + class2 + work;//sum of total hours entered
const weekly = 40;//constant of 40 hour work week

console.log("Time management is very important at a school like Full Sail. The workload at Full Sail can be very difficult at times.");//time management at full sail
console.log("Every month your schedule will change and every week even day your schedule can change due to last minute unforeseen circumstances.");//changing of schedule
console.log("It is very important to schedule out you time wisely especially if you have a job on top of your classes as I do.");//wisely scheduling hours  
console.log("I have two classes a month with work and WPF is " + class1 + " hours long. College Math is " + class2 + " hours long as well." );
console.log("I also work " + work + " hours a week and that interferes with how much time I have to finish homework assignments." );
console.log("If you add all of that time up it equals to " + total + " and you can see why it is important to manage your time wisely.");

if (total>=55) { //total entered by user >=55 hours
    console.log( total + " Hours is a lot of time to be taken out of the week and if continues this way there is a possibility you will burn yourself out.");//conditional answer for if
}
else{ //total entered by user less than 55 hours
    console.log( total + " Hours is a comfortable amount of hour for the week so if given the opportunity you should study ahead and be prepared for upcoming class work.");//conditional answer for else
}

console.log("The optimal amount of hours for work is about " + weekly + " so you do not burn yourself out and you get your work done with some personal time to spare.");//closing statement of 40 hours a week






