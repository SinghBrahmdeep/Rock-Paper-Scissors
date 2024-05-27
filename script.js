let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const user_para = document.querySelector("#userscore");
const comp_para = document.querySelector("#compscore");


const geneCompchoice = ()=>{
  const options = ["rock", "paper" , "scissor"];

  let ran = Math.floor(Math.random() * 3);
  return options[ran];
}

const drawGame = ()=>{
  console.log("game was draw");
  msg.innerText = "Game Was Draw";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin , userChoice , computerchoice) =>{
  if(userwin){
    console.log("you win");
    userScore++;
    user_para.innerText = userScore;
    msg.innerText = `You Win!. Your ${userChoice} beats ${computerchoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    compScore++;
    comp_para.innerText = compScore;
    console.log("you lose");
    msg.innerText = `You Lose. ${computerchoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame= (userchoice) =>{
  console.log("userChoice is: " , userchoice);
  const computerchoice = geneCompchoice();
  console.log("compChoice is: " , computerchoice);

  if(userchoice == computerchoice){
    drawGame();
  }
  else{
    let userwin = true;
    if(userchoice == "rock"){
      userwin = computerchoice == "paper" ? false : true;
    }
    else if(userchoice == "paper"){
      userwin = computerchoice == "scissor" ? false : true;
    }
    else if(userchoice == "scissor"){
      userwin = computerchoice == "rock" ? false : true;
    }

    showWinner(userwin , userchoice , computerchoice);
  }
}

choices.forEach(choice => {
  console.log(choice);
  choice.addEventListener("click" , () =>{
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);   
  })
});