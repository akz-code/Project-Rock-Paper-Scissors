// PC's choice
function choicePC() {
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
function getChoiceUsser() {
  
  let choiceUsser = parseInt(
    prompt("Choose 1 for Rock, choose 2 for Paper and choose 3 for Scissors.")
  );
  let Usser;
  
  if (choiceUsser === 1) {
    Usser = "Rock";
  } else if (choiceUsser === 2) {
    Usser = "Paper";
  } else if (choiceUsser === 3) {
    Usser = "Scissors";
  }
}
