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
  // make sure only first letter is capitalised
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1)
  // tests all the cases and edits the endString
  let endString = "Invalid input so you lose!";
  if (playerSelection === computerSelection) {
    endString = `You tied! You both chose ${computerSelection}!`;
  }
  else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      endString = "You lose! Paper beats Rock!";
    }
    else if (computerSelection === "Scissors") {
      endString = "You win! Rock beats Scissors!";
    }
  }
  else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      endString = "You lose! Scissors beats Paper!";
    }
    else if (computerSelection === "Rock") {
      endString = "You win! Paper beats Rock!";
    }
  }
  else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      endString = "You lose! Rock beats Scissors!";
    }
    else if (computerSelection === "Paper") {
      endString = "You win! Scissors beats Paper";
    }
  }
  console.log(endString)
  return endString;
}

function game () {
  let playerScore = 5;
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let endStirng = playRound(playerSelection, computerSelection);
    if (endStirng.includes("lose")) {
      playerScore--;
    }
    else if (endStirng.includes("tied")) {
      playerScore -= 0.5;
    }
  }
  const tieScore = playerScore/2;
  if (playerScore > tieScore) {
    console.log(`You win with a score of ${playerScore}!`);
  }
  else if (playerScore < tieScore) {
    console.log(`You lose with a score of ${playerScore}!`);
  }
  else {
    console.log(`You tied with a score of ${playerScore}!`);
  }
}

game()
