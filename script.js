function choicePC() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  let PC = "";
  if (randomChoice === 1) {
    return (PC = "Rock");
  }
  else if (randomChoice === 2) {
    return (PC = "Paper")
  }
  else if(randomChoice === 3) {
    return (PC = "Scissors")
  }
}
