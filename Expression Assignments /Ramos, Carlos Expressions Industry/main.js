console.log("Expression Industry");
var teamMembers = parseInt(prompt("How many people are on your team?")); // different people have different styles
var personalStyles = parseInt(prompt("How many different editor's do the team member's use?")); // and use different editors
var teams = 2; // we have 2 teams
var average = teamMembers * personalStyles * teams / teamMembers; // multiply members with styles then with team and divide by members get average


console.log("The article I used for this project was from Smashing Magazine about Why Coding Styles Matters.");
console.log("It discusses what coding style is and defines it as being a personal style of how your code looks");
console.log("It also states that this can be very difficult in a team atmosphere because of all the different styles");
console.log("It has a sample of code that uses comments to help illustrate how these can help while in a team");
console.log("While everyone has a personal coding style it is possible to work in teams and have a great project");
console.log("If there are " + teams + " teams with " + teamMembers + " team members using " + personalStyles + " different editors being used");
console.log("that can cause confusion because " + average + " different editors are being used but this can be resolved with great communication");
console.log("If the team members find common ground and have goo communication it can become a great project");