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
  updateDisplay(playerScore, computerScore, "./images/denied.png", "None", True);

  function updateDisplay (playerScore, computerScore, computerImage, computerText, showAttribution) {
    playerScoreNumber.innerText = playerScore;
    computerScoreNumber.innerText = computerScore;
    computerAction.innerText = computerText;
    computerActionImage.setAttribute("src", computerImage);
    if (showAttribution) {
      attributionLink.style.display = "inline";
    }
    else {
      attributionLink.style.display = "none";
    }
  }

  function action (event) {
    const computerSelection = getComputerChoice();
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
    updateDisplay(playerScore, computerScore, computerSelection[1], computerSelection[0], false);
    if (playerScore == 5 || computerScore == 5) {
      for (const button of buttons) {
        button.removeEventListener("click", action);
      }
      addRestartButton()
    }
  }

  function addRestartButton () {
    let finalResultText = "YOU LOST!😭";
    if (playerScore > computerScore) {
      finalResultText = "YOU WON!🙀";
    }
    const finalResult = document.createElement("div");
    finalResult.innerText = finalResultText;
    finalResult.style.fontSize = "xx-large";
    finalResult.style.textAlign = "center";
    finalResult.style.marginTop = "20px";
    const restartButton = document.createElement("button");
    restartButton.style.display = "block";
    restartButton.style.margin = "20px auto";
    restartButton.innerText = "Restart";
    restartButton.style.padding = "10px";
    restartButton.style.fontSize = "xx-large";
    restartButton.addEventListener("click", function (event) {
      restart(finalResult)
    });
    finalResult.appendChild(restartButton);
    body.appendChild(finalResult);

    function restart (restartDiv) {
      restartDiv.remove();
      game();
    }
  }
}

const body = document.querySelector(".body")
const playerScoreNumber = document.querySelector(".player-score-number");
const computerScoreNumber = document.querySelector(".computer-score-number");
const computerAction = document.querySelector(".computer-selection-name");
const computerActionImage = document.querySelector(".computer-selection img");
const attributionLink = document.querySelector(".computer-selection a")
const buttons = document.querySelectorAll("button");
game();
