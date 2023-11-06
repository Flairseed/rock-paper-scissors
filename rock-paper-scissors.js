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
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);
  // tests all the cases and edits the endString
  let endString = "Invalid input so you lose!";
  // simplest case is the tie case
  if (playerSelection === computerSelection) {
    endString = `You tied! You both chose ${computerSelection}!`;
  }
  // player chooses Rock
  else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      endString = "You lose! Paper beats Rock!";
    }
    else if (computerSelection === "Scissors") {
      endString = "You win! Rock beats Scissors!";
    }
  }
  // player chooses Paper
  else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      endString = "You lose! Scissors beats Paper!";
    }
    else if (computerSelection === "Rock") {
      endString = "You win! Paper beats Rock!";
    }
  }
  // player chooses Scissors
  else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      endString = "You lose! Rock beats Scissors!";
    }
    else if (computerSelection === "Paper") {
      endString = "You win! Scissors beats Paper";
    }
  }
  return endString;
}

function game () {
  /* 
  playerScore gets subtracted from hence it is the maximum points. tieScore
  however, will always be half of playerScore
  */
  let playerScore = 0;
  let computerScore = 0;
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Rock, Paper or Scissors?");
  let endStirng = playRound(playerSelection, computerSelection);
  console.log(endStirng);
  // checks to see if the endString has a certain keyword
  if (endStirng.includes("lose")) {
    computerScore++;
  }
  else if (endStirng.includes("win")) {
    playerScore++;
  }
}

game();
