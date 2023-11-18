// PC's choice
function getChoicePC() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice === 1) {
    return "Rock";
  } else if (randomChoice === 2) {
    return "Paper";
  } else if (randomChoice === 3) {
    return "Scissors";
  }
}

// Usser's choice
function getChoiceUser() {
  let choiceUser = parseInt(
    prompt("Choose 1 for Rock, choose 2 for Paper and choose 3 for Scissors.")
  );

  if (choiceUser === 1) {
    return "Rock";
  } else if (choiceUser === 2) {
    return "Paper";
  } else if (choiceUser === 3) {
    return "Scissors";
  }
}

// Game

function Game() {
  let PC = getChoicePC();
  let User = getChoiceUser();

  if (PC === User) {
    alert("DRAW!");
  } else if (
    (PC === "Rock" && User === "Scissors") ||
    (PC === "Paper" && Usser === "Rock") ||
    (PC === "Scissors" && Usser === "Paper")
  ) {
    alert("You have lost");
  } else if (
    (PC === "Rock" && User === "Paper") ||
    (PC === "Paper" && User === "Scissors") ||
    (PC === "Scissors" && User === "Rock")
  ) {
    alert("You have a won");
  }
}
