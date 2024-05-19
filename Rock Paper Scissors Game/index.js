

const choice = ["Rock", "Paper", "Scissors"];
const display = document.getElementById("playerchoice"); 
const computer = document.getElementById("computer");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const botscoredisplay = document.getElementById("botscoredisplay");
const gameoverornot = document.getElementById("gameoverornot");
const finalresultt = document.getElementById("finalresultt");


let playerscore = 0;
let botscore = 0;




function checkGameOver() {
    if (playerscore >= 10 ) {
        gameoverornot.textContent = "Game Over! You won overall Game";
        playerscore = 0;
        botscore = 0;
        playerscoredisplay.textContent = 0;
        botscoredisplay.textContent = 0;
        
    }
    else if (botscore >= 10) {
        gameoverornot.textContent = "Game Over! You lost overall Game";
        playerscore = 0;
        botscore = 0;
        playerscoredisplay.textContent = 0;
        botscoredisplay.textContent = 0;
        
    }
}



function gameplay(playerchoice) { // Corrected parameter name
    const computerch = choice[Math.floor(Math.random() * 3)];

    let result = "";
    if (playerchoice === computerch) { 
        result = "It's a Tie!";
    } else {
        switch (playerchoice) {
            case "Rock":
                result = computerch === "Scissors" ? "You Win!" : "You Lose!";
                break;
            case "Paper":
                result = computerch === "Rock" ? "You Win!" : "You Lose!";
                break;
            case "Scissors":
                result = computerch === "Paper" ? "You Win!" : "You Lose!";
                break;
        }
    }
    display.textContent = `Player: ${playerchoice}`;
    computer.textContent = `Bot: ${computerch}`; 
    resultdisplay.textContent = result;

    switch(result){
        case "You Win!" :
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break
        case "You Lose!":
            botscore++;
            botscoredisplay.textContent = botscore;
            break

    }
    checkGameOver();
   
}
