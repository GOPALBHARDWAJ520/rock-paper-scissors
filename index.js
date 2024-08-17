let userScore = 0;
let compScore = 0;
const user_score_Ref = document.getElementById('user-score');
const comp_score_Ref = document.getElementById('comp-score');
const msg = document.getElementById('msg');
const msg_container = document.querySelector('.msg-container');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3); // 0,1,2
    return options[idx];
};

const showWinner = (userChoice, compChoice, userWin) => {
    if (userWin) {
        userScore++;
        user_score_Ref.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }

    else{
        compScore++;
        comp_score_Ref.innerText = compScore;
        msg.innerText = 'You Lost! ${compChoice} beats your ${userChoice}';
        msg.style.backgroundColor = 'red';
        }
    }
        const drawGame = () => {
        msg.innerText = "Game Draw, Play again";
        msg.style.backgroundColor = '#00006ad1';
        }
        const playGame = (userChoice) => {
        const compChoice = genCompChoice();
        if(userChoice === compChoice) {
        drawGame();
        }
        else{
        let userWin = true;
        if (userChoice === "rock"){
       userWin = compChoice === "paper" ? false : true;
       }
     else if(userChoice == "paper"){
     userWin = compChoice === "scissors" ? false : true;
    }
     else{
     userWin = compChoice === "rock" ? false : true;
      }
     showWinner(userChoice, compChoice, userWin);
    }};
      const choices = document.querySelectorAll(".choice");
     choices.forEach((choice) => {
     choice.addEventListener("click", () => {
     const userChoice = choice.getAttribute("id");
     playGame(userChoice);
       });
      })
