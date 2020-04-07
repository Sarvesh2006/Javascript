const game = () => {
  let pscore = 0;
  let cscore = 1;

  //Starting the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //Here is where we call compare hands
        compareHands(this.textContent, computerChoice);
        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      pscore++;
      cscore++;
      return;
    }
    //Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pscore++;
        return;
      } else {
        winner.textContent = "The computer wins";
        cscore++;
        return;
      }
    }
    //Check for paper
    //Check for rock
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cscore++;
        return;
      } else {
        winner.textContent = "The Player wins";
        pscore++;
        return;
      }
    }
    //Check for scissors
    //Check for rock
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Comnputer wins";
        cscore++;
        return;
      } else {
        winner.textContent = "Player wins";
        pscore++;
        return;
      }
    }
  };
  //Calling the inner function
  startGame();
};

game();
