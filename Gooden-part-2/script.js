//Step 1: prompt user or name
let playerName = prompt("Welcome to mini golf! Enter player name.");
let holes = ["Hole 1", "Hole 2", "Hole 3", "Hole 4", "Hole 5", "Hole 6"];
let playerScore = 0;
let totalScore = 0;
console.log(playerName);
//Step 2: prompt user for 3/6 holes of golf
let games = prompt("Hi, " + playerName +  "! Would you like to play 3 or 6 holes?");
//Step 3: prompt user for number of putts per whole

for (let i = 0; i < games; i++) {
    let putts = Number( prompt("How many putts for " + holes[i] + "? Par is 3") ); 
    playerScore += putts;
} 

console.log(games);
console.log(playerName + "'s total score was " + playerScore);
let totalPar = (games * 3);
let finalScore = totalPar - playerScore;
if (playerScore < totalPar) {
    alert("Great job, " + playerName + "! Your total par was -" + finalScore);
    console.log(playerName + "'s total par was -" + finalScore);
} else if (playerScore > totalPar) {
    alert("Nice try, " + playerName + ". Your total par was +" + finalScore);
    console.log(playerName + "'s total par was +" + finalScore)
} else if (playerScore = totalPar) {
    alert("Good game, " + playerName + ". Your total par was 0");
}




//Step 3: prompt user for number of putts per hole
//loop through depending on user input for step 2



//Step 4: Display hole and score for user
//Step 5: console log completion of prompt
//Step 6: console log user's name
//Step 7: concole log correct number for par calculations
//Step 8: console log user's name and score of 0
