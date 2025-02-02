const userScoreSpan = document.querySelector('#score');
const resultP = document.querySelector('.result > p');
const rockButton = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');


let userScore = 0;
let computerScore = 0;
let round = 1;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function convertToWord(choice) {
    if (choice === 'rock') return '«Камень»';
    if (choice === 'scissors') return '«Ножницы»';
    return '«Бумага»';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = `${userScore} : ${computerScore}`;
    resultP.innerHTML = `${convertToWord(userChoice)} побеждает ${convertToWord(computerChoice)}. Вы выиграли!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = `${userScore} : ${computerScore}`;
    resultP.innerHTML = `${convertToWord(userChoice)} проигрывает ${convertToWord(computerChoice)}. Вы проиграли.`;
}

function draw(userChoice, computerChoice) {
    resultP.innerHTML = `${convertToWord(userChoice)} и ${convertToWord(computerChoice)}. Ничья.`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }

    round++;
    if (round === 4) {
        endGame ();
    }
}

function endGame() {
    if (userScore > computerScore) {
        resultP.innerHTML = `Игра окончена. Вы выиграли со счётом ${userScore} : ${computerScore}!`;
    } else if (userScore < computerScore) {
        resultP.innerHTML = `Игра окончена. Вы проиграли со счётом ${userScore} : ${computerScore}.`;
    } else {
        resultP.innerHTML = `Игра окончена. Ничья со счётом ${userScore} : ${computerScore}.`;
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


function main() {
    rockButton.addEventListener('click', () => game('rock'));
    paperButton.addEventListener('click', () => game('paper'));
    scissorsButton.addEventListener('click', () => game('scissors'));
}

main();
