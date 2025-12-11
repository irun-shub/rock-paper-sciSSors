// console.log("hello, Shubham!")

function getComputerChoice() {
    let random = Math.floor(Math.random() * 100);

    if (random >= 0 && random <= 33) {
        return 'rock';
    } else if (random >= 34 && random <= 66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    return window.prompt("Player! Are You Ready to Enter your choice");
}


function playRound(humanChoice, computerChoice) {
    //rock > scissors
    //paper > rock
    //scissors > paper

    if (humanChoice === 'rock' && computerChoice === 'scissors') {

        console.log(`Man choose: ${humanChoice} and computer choose: ${computerChoice} Humna Wins`)
        return 'Human-Wins';

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {

        console.log(`Man choose: ${humanChoice} and computer choose: ${computerChoice} Humna Wins`)
        return 'Human-Wins';

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {

        console.log(`Man choose: ${humanChoice} and computer choose: ${computerChoice} Humna Wins`)
        return 'Human-Wins';

    } else if (humanChoice === computerChoice) {

        console.log(`Man choose: ${humanChoice} and computer choose: ${computerChoice} No one Wins`)
        return 'tie';

    }
    else {
        console.log(`Man choose: ${humanChoice} and computer choose: ${computerChoice} Computer Wins`)
        return 'Computer-Wins';
    }
}

function playGame() {
    let roundOfGame = window.prompt('Ok! Then Tell Me How Many Times You Want to play this game.')
    let humanScore = 0;
    let computerScore = 0;

    let i = 1;
    while (i <= roundOfGame) {

        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        if (result === 'Human-Wins') {
            humanScore += 1;
        } else if (result === 'Computer-Wins') {
            computerScore += 1;
        } else {
            console.log('Play Again its a tie');
        }
        console.log(`human winnig score ${humanScore} computer winning score${computerScore}`);
        i++;
    }

    if (humanScore > computerScore) {
        console.log('Congratulation HUMANS You Win')
    }else if(humanScore === computerScore){
        console.log('This time we go because it is a tie, better luck next time')
    }
     else {
        console.log('Humans you lose ! you guys are DOOMD!')
    }

}

playGame();



