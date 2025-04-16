
let humanScore = 0;
let computerScore = 0;
let tie = "Tie! No winner";
let win = "You won! Congratulations!";
let lose = "You Lost!";

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
      console.log("Computer Choice: ROCK");
      return "ROCK";
    case 1:
      console.log("Computer Choice: PAPER");
      return "PAPER";
    case 2:
      console.log("Computer Choice: SCISSORS");
      return "SCISSORS";
  }
}

function getHumanChoice () {
  userChoice = prompt("Please type your choice: \n 1. Rock \n 2. Paper \n 3. Scissors");
  userChoice = userChoice.toUpperCase();

  if ((userChoice !== "ROCK") && (userChoice !== "PAPER") && (userChoice !== "SCISSORS")) {
    console.log("Invalid choice: Please reload the page to try again");
    return 1;
  }

  console.log(userChoice);
  return userChoice;
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      console.log(tie);
    } else if (computerChoice === "SCISSORS") {
      console.log(win);
      humanScore += 1;      
    } else {
      console.log(lose);
      computerScore += 1;
    }
  } else if (humanChoice === "SCISSORS") {
    if (computerChoice === "SCISSORS") {
      console.log(tie);
    } else if (computerChoice === "PAPER") {
      console.log(win);
      humanScore += 1;      
    } else {
      console.log(lose);
      computerScore += 1;
    }
  } else {
    if (computerChoice === "PAPER") {
      console.log(tie);
    } else if (computerChoice === "ROCK") {
      console.log(win);
      humanScore += 1;      
    } else {
      console.log(lose);
      computerScore += 1;
    }
  }
}

function playGame () {
  for(let i=0; i < 5; i++){
    playRound(getHumanChoice() , getComputerChoice(randomRangeThree()));
  }
}

playGame();
