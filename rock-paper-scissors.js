const choices = [["Rock", "./images/rock.png"], ["Paper", "./images/paper.png"], ["Scissors", "./images/scissors.png"]];

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
  for (const button of buttons) {
    button.addEventListener("click", action);
  }

  function action (event) {
    const computerSelection = getComputerChoice();
    computerAction.innerText = computerSelection[0];
    computerActionImage.setAttribute("src", computerSelection[1])
    const actionButton = event.currentTarget;
    const playerSelection = actionButton.innerText;
    const endStirng = playRound(playerSelection, computerSelection[0]);
    console.log(endStirng);
    // checks to see if the endString has a certain keyword
    if (endStirng.includes("lose")) {
      computerScore++;
    }
    else if (endStirng.includes("win")) {
      playerScore++;
    }
    playerScoreNumber.innerText = playerScore;
    computerScoreNumber.innerText = computerScore;
    if (playerScore == 5 || computerScore == 5) {
      for (const button of buttons) {
        button.removeEventListener("click", action);
      }
    }
  }
}

const playerScoreNumber = document.querySelector(".player-score-number");
const computerScoreNumber = document.querySelector(".computer-score-number");
const computerAction = document.querySelector(".computer-selection-name");
const computerActionImage = document.querySelector(".computer-selection img")
const buttons = document.querySelectorAll("button");
game();
