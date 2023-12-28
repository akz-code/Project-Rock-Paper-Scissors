let computerScore = 0;
let userScore = 0;

const buttonRock = document.querySelector(".buttonRock-User");
const buttonPaper = document.querySelector(".buttonPaper-User");
const buttonScissors = document.querySelector(".buttonScissors-User");

buttonRock.addEventListener("click", () => {
  playGame("rock", getComputerChoice());
});
buttonPaper.addEventListener("click", () => {
  playGame("papel", getComputerChoice());
});
buttonScissors.addEventListener("click", () => {
  playGame("scissors", getComputerChoice());
});

// PC's choice
const getComputerChoice = function () {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "papel";
  } else if (randomChoice === 3) {
    return "scissors";
  }
};

// Play Game
const playGame = function (user, computer) {
  if (user === computer) {
    updateScore("tie");
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "papel") ||
    (user === "papel" && computer === "rock")
  ) {
    updateScore("win");
  } else if (
    (user === "rock" && computer === "papel") ||
    (user === "papel" && computer === "scissors") ||
    (user === "scissors" && computer === "rock")
  ) {
    updateScore("lost");
  }
};
// Update score
const updateScore = function (result) {
  if (result === "tie") {
    console.log(`Tie. Computer: ${computerScore} User: ${userScore}`);
  } else if (result === "win") {
    userScore++;
    console.log(`You won. Computer: ${computerScore} User: ${userScore}`);
  } else if (result === "lost") {
    computerScore++;
    console.log(`You lost. Computer: ${computerScore} User: ${userScore}`);
  }
  endGame();
};

const endGame = function () {
  if (userScore === 5) {
    userScore = 0;
    computerScore = 0;
    return alert("You won!");
  } else if (computerScore === 5) {
    userScore = 0;
    computerScore = 0;
    return alert("You lost!");
  }
};


