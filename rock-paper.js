//Outputs Integer between 0 and 2 including them.
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
  userChoice = prompt("Please type the character of your choice: \n 1. R for Rock \n 2. P for Paper \n 3. S for Scissors");

  if ((userChoice !== "R") && (userChoice !== "P") && (userChoice !== "S")) {
    console.log("Invalid choice: Please reload the page to try again");
    return 1;
  }

  return userChoice;
}

