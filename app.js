var againn=document.getElementById("again")

const choices = ["rock", "paper", "scissors"];

function playGame() {
  const userChoice = prompt("Choose rock, paper, or scissors:");
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.write(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  if (userChoice === computerChoice) {
    document.write("It's a tie!");
  } else if (userChoice === "rock" && computerChoice === "scissors" ||
             userChoice === "paper" && computerChoice === "rock" ||
             userChoice === "scissors" && computerChoice === "paper") {
    document.write("You win!");
  } else {
   document.write("The computer wins!");
  }

}

playGame();



function again(){
playGame()

}
again()
