const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
  // find a random index
  numberOfChoices = choices.length;
  choiceIndex = Math.floor(Math.random() * numberOfChoices);
  // use the index to return the choice
  choice = choices[choiceIndex];
  return choice;
}
