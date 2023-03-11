var againn=document.getElementById("again")

const choices = ["rock", "paper", "scissors"];

function playGame() {
  const userChoice = prompt("Choose rock, paper, or scissors:");
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("para").innerHTML=(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  if (userChoice === computerChoice) {
    document.write("It's a tie!");
  } else if (userChoice === "rock" && computerChoice === "scissors" ||
             userChoice === "paper" && computerChoice === "rock" ||
             userChoice === "scissors" && computerChoice === "paper") {
                document.getElementById("para").innerHTML=("para")("You win!");
  } else {
    document.getElementById("para")("The computer wins!");
  }

}

playGame();



function again(){
againn=playGame()

}

