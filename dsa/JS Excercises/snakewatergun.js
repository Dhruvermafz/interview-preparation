let options = ["Water", "Snake", "Gun"];
let round = 1;
let computerScore = 0;

while (round <= 3) {
  let playerChoice = prompt(
    "You are playing Snake, Water, Gun Game. Choose yours?"
  );
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  // Determine the winner of the round (always favoring the computer)
  let result = "";
  if (
    (computerChoice == "Snake" && playerChoice == "Water") ||
    (computerChoice == "Water" && playerChoice == "Gun") ||
    (computerChoice == "Gun" && playerChoice == "Snake")
  ) {
    result = "Computer wins!";
    computerScore++;
  } else if (playerChoice == computerChoice) {
    result = "It's a tie";
  } else {
    result = "You win!";
  }

  console.log(
    `Round ${round}: You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`
  );
  round++;
}

if (computerScore > 1) {
  alert(`Computer wins with a total of ${computerScore} points.`);
} else if (computerScore === 1) {
  alert(`Computer wins with 1 point.`);
} else {
  alert("You managed to beat the computer!");
}
