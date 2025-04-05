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

