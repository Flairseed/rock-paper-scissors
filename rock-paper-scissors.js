const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
  // find a random index
  let numberOfChoices = choices.length;
  let choiceIndex = Math.floor(Math.random() * numberOfChoices);
  // use the index to return the choice
  let choice = choices[choiceIndex];
  return choice;
}

function playRound (playerSelection, computerSelection) {
  let endString = "Invalid input so you lose!";
  if (playerSelection === computerSelection) {
    endString = `You tied! You both chose ${computerSelection}!`
  }
  else if (playerSelection === "Rock") {
    if (computerSelection == "Paper") {
      endString = "You lose! Paper beats Rock!"
    }
    else if (computerSelection == "Scissors") {
      endString = "You win! Rock beats Scissors!"
    }
  }
}
