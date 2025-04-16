
let humanScore = 0;
let computerScore = 0;
let humanScoreDiv = document.querySelector("#playerScore");
let computerScoreDiv = document.querySelector("#computerScore");
let winner = document.querySelector("#winner");

let tie = "Tie! No winner";
let win = "You won! Congratulations!";
let lose = "You Lost!";

let wonFlag = false;


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
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function addHumanScore () {
  humanScore += 1;
  humanScoreDiv.textContent = `Player Score: ${humanScore}`;
  if (humanScore === 5 && !wonFlag) {
    winner.textContent = win;
    wonFlag = true;
  }
}

function addComputerScore () {
  computerScore += 1;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
  if (computerScore === 5 && !wonFlag) {
    winner.textContent = lose;
    wonFlag = true;
  }
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    if (computerChoice === "SCISSORS") {
      addHumanScore();     
    } else {
      addComputerScore();
    }
  } else if (humanChoice === "SCISSORS") {
     if (computerChoice === "PAPER") {
      addHumanScore();     
    } else {
      addComputerScore();
    }
  } else {
     if (computerChoice === "ROCK") {
      addHumanScore();      
    } else {
      addComputerScore();
    }
  }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function(){playRound("ROCK", getComputerChoice(randomRangeThree()))});
paperButton.addEventListener("click", function(){playRound("PAPER", getComputerChoice(randomRangeThree()))});
scissorsButton.addEventListener("click", function(){playRound("SCISSORS", getComputerChoice(randomRangeThree()))});

