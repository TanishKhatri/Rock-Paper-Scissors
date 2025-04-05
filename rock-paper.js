//Outputs Integer between 0 and 2 including them.

let humanScore = 0;
let computerScore = 0;

function randomRangeThree () {
  if((0 <= Math.random()) && (Math.random() < 0.33))
  {
    return 0;
  } else if ((0.33 <= Math.random()) && (Math.random() < 0.66)) {
    return 1;
  } else {
    return 2;
  }
}

function getComputerChoice (choice) {
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
  }
}

function getHumanChoice () {
  userChoice = prompt("Please type your choice: \n 1. Rock \n 2. Paper \n 3. Scissors");
  userChoice = userChoice.toUpperCase();

  if ((userChoice !== "ROCK") && (userChoice !== "PAPER") && (userChoice !== "SCISSORS")) {
    console.log("Invalid choice: Please reload the page to try again");
    return 1;
  }

  return userChoice;
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      console.log("Tie! No winner");
    } else if (computerChoice === "SCISSORS") {
      console.log("You won! Congratulations!");
      humanScore += 1;      
    } else {
      console.log("You Lost!");
      computerScore += 1;
    }
  } else if (humanChoice === "SCISSORS") {
    if (computerChoice === "SCISSORS") {
      console.log("Tie! No winner");
    } else if (computerChoice === "PAPER") {
      console.log("You won! Congratulations!");
      humanScore += 1;      
    } else {
      console.log("You Lost!");
      computerScore += 1;
    }
  } else {
    if (computerChoice === "PAPER") {
      console.log("Tie! No winner");
    } else if (computerChoice === "ROCK") {
      console.log("You won! Congratulations!");
      humanScore += 1;      
    } else {
      console.log("You Lost!");
      computerScore += 1;
    }
  }
}

function playGame () {
  for(let i=0; i < 5; i++){
    getComputerChoice(randomRangeThree());
    getHumanChoice();
    playRound();
  }
}

playGame();
