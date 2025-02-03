const userScoreSpan = document.querySelector('#score');       
const resultP = document.querySelector('.result > p');          
const rockButton = document.getElementById('rock');             
const scissorsButton = document.getElementById('scissors');     
const paperButton = document.getElementById('paper');           
const resetButton = document.getElementById('reset');           


let userScore = 0;      
let computerScore = 0;  
let round = 1;          


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];              
    const randomIndex = Math.floor(Math.random() * choices.length); 
    return choices[randomIndex];                                 
}


function convertToWord(choice) {
    if (choice === 'rock') return '«Камень»';
    if (choice === 'scissors') return '«Ножницы»';
    return '«Бумага»';  
}


function updateScoreAndDisplay(userChoice, computerChoice, result) {
    if (result === 'win') {
        userScore++;    
    } else if (result === 'lose') {
        computerScore++; 
    }
    
    userScoreSpan.innerHTML = `${userScore} : ${computerScore}`;
    const userWord = convertToWord(userChoice);
    const computerWord = convertToWord(computerChoice);

    if (result === 'win') {
        resultP.innerHTML = `${userWord} побеждает ${computerWord}. Вы выиграли!`;
    } else if (result === 'lose') {
        resultP.innerHTML = `${userWord} проигрывает ${computerWord}. Вы проиграли.`;
    } else {
        resultP.innerHTML = `${userWord} и ${computerWord}. Ничья.`;
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            updateScoreAndDisplay(userChoice, computerChoice, 'win');
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            updateScoreAndDisplay(userChoice, computerChoice, 'lose');
            break;
        default:
            updateScoreAndDisplay(userChoice, computerChoice, 'draw');
            break;
    }
    
    round++;

    if (round > 3) {
        endGame();
    }
}

function endGame() {
    if (userScore > computerScore) {
        resultP.innerHTML = `Игра окончена. Вы выиграли со счетом ${userScore} : ${computerScore}!`;
    } else if (userScore < computerScore) {
        resultP.innerHTML = `Игра окончена. Вы проиграли со счетом ${userScore} : ${computerScore}.`;
    } else {
        resultP.innerHTML = `Игра окончена. Ничья со счетом ${userScore} : ${computerScore}.`;
    }
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.style.display = 'inline-block';
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 1;
    userScoreSpan.innerHTML = `${userScore} : ${computerScore}`;
    resultP.innerHTML = 'Сделайте ход и начните игру!';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.style.display = 'none';
}

function main() {
    rockButton.addEventListener('click', () => game('rock'));
    paperButton.addEventListener('click', () => game('paper'));
    scissorsButton.addEventListener('click', () => game('scissors'));
    resetButton.addEventListener('click', resetGame);
}

main();
