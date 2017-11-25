// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var userChoice = null;
var computerChoice = null;

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
    

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {
    
    function generateComputerChoice(){
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var rps = ["rock", "paper", "scissors"];
        // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2.
    var randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[ranomNum])
    // Task 1, Step 4: return this new value
    return rps[randomNumber];
}
    
    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    

    function pickWinner (userChoice,computerChoice)
    {
        console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    if (userChoice === "rock" && computerChoice === "paper" ||
        userChoice === "paper" && computerChoice === "scissors" ||
        userChoice === "scissors" && computerChoice === "rock"
        )
    {
        console.log("Computer wins");
        $("#result").html("<br> Computer wins </br>");
    }
    else if (userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissors" && computerChoice === "paper")
    {
        console.log("User Wins");
        $("#result").html("<br> User wins </br>");
    }
     else 
    {
        console.log("Draw")
        $("#result").html("<br> Draw <br>");
    }
};

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
    $("#rock").click(function()
{
    userChoice = "rock";
    computerChoice = generateComputerChoice();
    pickWinner(userChoice, computerChoice);
    $("#computer-choice").html("<br>" + computerChoice + "</br>");
}
    );
    $("#scissors").click(function()
{
    userChoice = "scissors";
    computerChoice = generateComputerChoice();
    pickWinner(userChoice, computerChoice);
    $("#computer-choice").html("<br>" + computerChoice + "</br>");
}
    );    
    $("#paper").click(function()
{
    userChoice = "paper";
    computerChoice = generateComputerChoice();
    pickWinner(userChoice, computerChoice);
    $("#computer-choice").html("<br>" + computerChoice + "</br>");
}
    );
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line callss the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    

});