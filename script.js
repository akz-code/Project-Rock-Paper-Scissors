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

// User's choice
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
    return 0;
  } else if (
    (PC === "Rock" && User === "Scissors") ||
    (PC === "Paper" && User === "Rock") ||
    (PC === "Scissors" && User === "Paper")
  ) {
    return -1;
  } else if (
    (PC === "Rock" && User === "Paper") ||
    (PC === "Paper" && User === "Scissors") ||
    (PC === "Scissors" && User === "Rock")
  ) {
    return 1;
  }
}

// playRound function

function playRound() {
  let UserWins = 0;
  let PCWins = 0;

  for (let i = 0; i < 5; i++) {
    let result = Game();
    if ((result = 1)) {
      UserWins++;
    } else if ((result = -1)) {
      PCWins++;
    }
  }
}
