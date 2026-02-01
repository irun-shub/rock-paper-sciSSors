// // console.log("hello, Shubham!")

let humanScore = 0;
let computerScore = 0;
//const button = document.querySelector(".container");
const btns = document.querySelectorAll('button');

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

function stopPlay() {
    btns.forEach((elem) => {
        //console.log(elem);
        elem.disabled = true;
    })
}

function playRound(humanChoice) {
    //rock > scissors
    //paper > rock
    //scissors > paper
    let computerChoice = getComputerChoice();
    let result = "";
    let inst = "";


    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissors' && computerChoice === 'paper')) {

        humanScore += 1;

        result = `Man choose: "${humanChoice}" and Computer choose: "${computerChoice}" Humna Wins 
        Player score: '${humanScore}' , Computer score: '${computerScore}'`;

        if (humanScore === 5) {
            result += "  - Humans win the game ! Reload the page to play again"
            stopPlay();
        }


    } else if (humanChoice === computerChoice) {

        result = `Man choose: "${humanChoice}" and Computer choose: "${computerChoice}" No one Wins`;


    }
    else {
        computerScore += 1;
        result = `Man choose: "${humanChoice}" and Computer choose: "${computerChoice}" Computer Wins 
         Player score: '${humanScore}' , Computer score: '${computerScore}'`;
        if (computerScore === 5) {
            result += " - Computer win the game ! Reload the page to play agian."
            stopPlay();
        }

    }
    
    const ansText = document.querySelector('.anyTalk');
     ansText.textContent = result;
     return

}


// function playGame() {
//     let roundOfGame = window.prompt('Ok! Then Tell Me How Many Times You Want to play this game.')
//     let humanScore = 0;
//     let computerScore = 0;

//     let i = 1;
//     while (i <= roundOfGame) {

//         const humanSelection = getHumanChoice().toLowerCase();
//         const computerSelection = getComputerChoice();

//         const result = playRound(humanSelection, computerSelection);
//         if (result === 'Human-Wins') {
//             humanScore += 1;
//         } else if (result === 'Computer-Wins') {
//             computerScore += 1;
//         } else {
//             console.log('Play Again its a tie');
//         }
//         console.log(`human winnig score ${humanScore} computer winning score${computerScore}`);
//         i++;
//     }

//     if (humanScore > computerScore) {
//         console.log('Congratulation HUMANS You Win')
//     }else if(humanScore === computerScore){
//         console.log('This time we go because it is a tie, better luck next time')
//     }
//      else {
//         console.log('Humans you lose ! you guys are DOOMD!')
//     }

// }

// playGame();



// UI handeling code for rock , paper , scissors

// function eventWork(event) {
//     event.preventDefault();

//     let target = event.target.id; //humanChoice


//     // switch (target.id) {
//     //     case "rock":
//     //         //console.log(`human choose ${target.id}`);

//     //         break;
//     //     case "paper":
//     //         //console.log(`human choose ${target.id}`);

//     //         break;
//     //     case "scissors":
//     //         //console.log(`human choose ${target.id}`)

//     //         break;

//     // }
//         playRound(target);


//     //let winner = playRound(target, compChoos);

//     //console.log(`count:${count}, HumanWins:${humanScore}, ComputerWins:${computerScore}`);
// }


btns.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id)
    })
})



