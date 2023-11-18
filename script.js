// PC's choice
function choicePC(val1, val2, val3) {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice === 1) {
    return val1;
  } else if (randomChoice === 2) {
    return val2;
  } else if (randomChoice === 3) {
    return val3;
  }
}

let PC = choicePC("Rock", "Paper", "Scissors")
console.log(PC);

// Usser's choice

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
