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
}
