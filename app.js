var againn=document.getElementById("again")

const choices = ["rock", "paper", "scissors"];

function playGame() {
  const userChoice = prompt("Choose rock, paper, or scissors:");
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("para").innerHTML=(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  if (userChoice === computerChoice) {
    document.getElementById("para").innerHTML=`you chose ${userChoice} and the computer chose ${computerChoice} It's a tie!`;
  } else if (userChoice === "rock" && computerChoice === "scissors" ||
             userChoice === "paper" && computerChoice === "rock" ||
             userChoice === "scissors" && computerChoice === "paper") {
                document.getElementById("para").innerHTML=document.getElementById("para").innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}\n\nCongrats You Win!!`;

  } else {
    document.getElementById("para").innerHTML=`you chose ${userChoice} and the computer chose ${computerChoice} And the computer wins!!`;
  }

}

playGame();



function again(){
againn=playGame()



}

