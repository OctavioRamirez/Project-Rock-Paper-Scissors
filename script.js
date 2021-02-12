let rondasJugadas = 0;
let scoreHumano = 0;
let computerScore = 0;



let botonPiedra = document.querySelector('#piedra');
botonPiedra.addEventListener('click',function(){
    jugarRonda("rock");
})

let botonPapel = document.querySelector('#papel');
botonPapel.addEventListener('click',function(){
    jugarRonda("paper");
})
let botonTijera = document.querySelector('#tijeras');
botonTijera.addEventListener('click',function(){
    jugarRonda("scissors");
})

let displayScoreHumano = document.querySelector('#displayScoreHumano');
let displayScoreComputadora =document.querySelector('#displayScoreComputadora');

displayScoreHumano.textContent =scoreHumano;
displayScoreComputadora.textContent =computerScore;

function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 0) {
      return "rock";
    } else if (selection === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  



function reseteoScore(){
    scoreHumano = 0;
    computerScore =0;
    }

function jugarRonda(selectHumano, selectComputadora){
    rondasJugadas++;
    selectComputadora= computerPlay();

const msgVictoria = "Ganaste "+ rondasJugadas+" - "+selectHumano+" gana a "+selectComputadora;
const msgDerrota = "Perdiste "+ rondasJugadas+" - "+selectHumano+" gana a "+selectComputadora;

    if(selectHumano === "rock" && selectComputadora ==="scissors" || selectHumano ==="paper" && selectComputadora === "rock" || selectHumano === "scissors" && selectComputadora === "paper" ){
        scoreHumano++;
        resultadoRonda.textContent = msgVictoria;
    }else if (selectHumano === selectComputadora){
        resultadoRonda.textContent = "Ronda" + rondasJugadas + "'s " + " es un empate";
    } else{
        computerScore++;
        resultadoRonda.textContent = msgDerrota;
    }
    displayScoreHumano.textContent = scoreHumano;
    displayScoreComputadora.textContent = computerScore;
    controlarJuego();

}
function controlarJuego(){
    if(rondasJugadas === 5 && scoreHumano >computerScore){
        resultadoRonda.textContent = "Felicidades, ganaste el juego! haz  click en cualquier boton para empezar otro juego ";
        rondasJugadas = 0;
        reseteoScore();
    }
    else if(rondasJugadas === 5 && scoreHumano === computerScore){
        resultadoRonda.textContent = "Es un empate! haz click de nuevo en cualquier boton para empezar de vuelta ";
        rondasJugadas = 0;
        reseteoScore();

    }
    else if(rondasJugadas === 5 && scoreHumano < computerScore){
        resultadoRonda.textContent = "Perdiste :(), haz click en cualquier boton para empezar otro juego ";
        rondasJugadas = 0;
        reseteoScore();
}
    else{
        return;
    }
}





























































/*function computerPlay(){//creates a random choice for the computer, picks one element from the array "choice" randomly, and return the choice
    let choice =['rock','paper','scissors']
    let i = Math.floor(Math.random()*Math.floor(3));
    return choice[i];
}


///creater a function that playRound that takes 2 parameters  players choice and computer choice
function playRound(playerSelection,computerSelection){
    /// lets make sure both paramaters to be case sensitive
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log('youre choice is '=playerSelection);
    console.log(' and the computer choice is '+computerSelection);
    switch(tue){
    ///case in the player wins against the computer choice return "YOU WIN"
        case(playerSelection == 'ROCK' && computerSelection == 'SCISSORS'):
        case(playerSelection == 'SCISSORS' && computerSelection == 'PAPER'):
        case(playerSelection == 'PAPER' && computerSelection == 'ROCK'):
            console.log('YOU WIN! $(playerSelection) wins against $(computerSelection).');
            return 'YOU WIN! $(playerSelection) wins against $(computerSelection).';
    /// if player ties computer    
        case(playerSelection == 'ROCK' && computerSelection == 'ROCK'):
        case(playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS'):
        case(playerSelection == 'PAPER' && computerSelection == 'PAPER'):
            console.log('ITS A TIE! $(playerSelection) is equal to $(computerSelection).');
            return 'ITS A TIE! $(playerSelection) is equal to $(computerSelection).';
    /// if player lose against computer
        case(playerSelection == 'ROCK' && computerSelection == 'PAPER'):
        case(playerSelection == 'SCISSORS' && computerSelection == 'ROCK'):
        case(playerSelection == 'PAPER' && computerSelection == 'SCISSORS'):
            console.log('YOU LOSE! $(playerSelection) lose against $(computerSelection).');
            return 'YOU LOSE $(playerSelection) lose against $(computerSelection).';
    }
}

function game(){
    ///creates a variable that states how many rounds left to be played
    let numeroDeRondas = 5;
    ///creates a variable that keep the score of player and computer
    let scoreJugador = 0;
    let scoreComputadora  = 0;

    /// loop for the rounds
        
    
    
    while(numeroDeRondas > 0){
        ///we use the prompt to get input from the player at each round
        let playerSelection = prompt('Rock, Paper, Scissors', '');
        ///case sensitive
        playerSelection = playerSelection.toUpperCase();
        ///making sure the input is the aproppiate
        while(!(playerSelection=='ROCK' || playerSelection=='PAPER' || playerSelection=='SCISSORS')){
            playerSelection = prompt('The selection must be in between: Rock, Paper or Scissors.   Try again!','');
            playerSelection= playerSelection.toUpperCase();
        }
        let resultado = playRound(playerSelection,computerPlay());
        let regexWin = /win/;
            let regexTie = /tie/;
            let regexLose = /lose/;
            switch(true) {
                case (regexWin.test(resultado)):
                    scoreJugador++;
                    numeroDeRondas -= 1;
                    console.log(scoreJugador);
                    console.log(scoreComputadora);
                    break;
                case (regexTie.test(resultado)):
                    console.log(scoreJugador);
                    console.log(scoreComputadora);
                    break;
                case (regexLose.test(resultado)):
                    scoreComputadora++;
                    numeroDeRondas -= 1;
                    console.log(scoreJugador);
                    console.log(scoreComputadora);
                    break;

            }

    }

    return (playerScore > computerScore) ? `you won THE GAME!!!` : `you lost the game :(((`;


}*/