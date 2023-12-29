let computerScore = 0;
let userScore = 0;
const PCbuttons = document.querySelectorAll(".PCbuttons");
const userButtons = document.querySelectorAll(".userButtons");

// buttons user
const buttonRock = document.querySelector(".buttonRock-User");
const buttonPaper = document.querySelector(".buttonPaper-User");
const buttonScissors = document.querySelector(".buttonScissors-User");

// buttons PC
const buttonRockPC = document.querySelector(".buttonRock-PC");
const buttonPaperPC = document.querySelector(".buttonPaper-PC");
const buttonScissorsPC = document.querySelector(".buttonScissors-PC");

// Score information
const h3User_Information = document.querySelector(".UserInformation");
const h3PC_Information = document.querySelector(".PCInformation");

const userInformation = document.querySelector(".scoreUser");
const computerInformation = document.querySelector(".scorePC");

// User (event click)

buttonRock.addEventListener("click", () => {
  h3User_Information.textContent = "You: Rock -";
  PCbuttons.forEach((button) => {
    button.style.background = "#c4c8c5";
  });
  playGame("rock", getComputerChoice());
});
buttonPaper.addEventListener("click", () => {
  h3User_Information.textContent = "You: Paper -";
  PCbuttons.forEach((button) => {
    button.style.background = "#c4c8c5";
  });
  playGame("paper", getComputerChoice());
});
buttonScissors.addEventListener("click", () => {
  h3User_Information.textContent = "You: Scissors -";
  PCbuttons.forEach((button) => {
    button.style.background = "#c4c8c5";
  });
  playGame("scissors", getComputerChoice());
});

// PC's choice
const getComputerChoice = function () {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    h3PC_Information.textContent = "PC: Rock";
    buttonRockPC.style.background = "rgb(109, 104, 104)";
    return "rock";
  } else if (randomChoice === 2) {
    h3PC_Information.textContent = "PC: Paper";
    buttonPaperPC.style.background = "rgb(109, 104, 104)";
    return "paper";
  } else if (randomChoice === 3) {
    h3PC_Information.textContent = "PC: Scissors";
    buttonScissorsPC.style.background = "rgb(109, 104, 104)";
    return "scissors";
  }
};

// Play Game
const playGame = function (user, computer) {
  if (user === computer) {
    updateScore("tie");
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    updateScore("win");
  } else if (
    (user === "rock" && computer === "paper") ||
    (user === "paper" && computer === "scissors") ||
    (user === "scissors" && computer === "rock")
  ) {
    updateScore("lost");
  }
};
// Update score
const updateScore = function (result) {
  if (result === "tie") {
    userInformation.textContent = userScore;
    computerInformation.textContent = computerScore;
  } else if (result === "win") {
    userScore++;
    userInformation.textContent = userScore;
    computerInformation.textContent = computerScore;
  } else if (result === "lost") {
    computerScore++;
    userInformation.textContent = userScore;
    computerInformation.textContent = computerScore;
  }

  endGame();
};

//End game
const endGame = function () {
  if (userScore === 5) {
    resetScores();
    return alert("YOU WON!");
  } else if (computerScore === 5) {
    resetScores();
    return alert("YOU LOST!");
  }
};

const resetScores = function () {
  userScore = 0;
  computerScore = 0;
  userInformation.textContent = userScore;
  computerInformation.textContent = computerScore;
  h3PC_Information.textContent = "";
  h3User_Information.textContent = "";

  PCbuttons.forEach((button) => {
    button.style.background = "#c4c8c5";
  });
  userButtons.forEach((button) => {
    button.style.background = "#c4c8c5";
  });

};
