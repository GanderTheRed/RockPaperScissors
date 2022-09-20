

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();    
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log('Invalid response recieved');
    }
};

function getComputerChoice() {
    computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        return "rock"
    } else if (computerInput === 1) {
        return "paper";
    } else if (computerInput === 2) {
        return "scissors";
    }
    };

function determineWinner(userChoice,computerChoice) {
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
        return "You Win!";
    } else if (computerChoice === userChoice){
            return 'It was a Draw!';
        } else if (computerChoice === "scissors") {
            return 'You Lose!';
        }
    } else if (userChoice === "rock"){
        if (computerChoice === userChoice){
            return 'It was a Draw!';
        } else if (computerChoice === 'paper') {
            return 'You Lose!';
        } else if (computerChoice === 'scissors') {
            return 'You Win!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === userChoice){
            return 'It was a Draw!';
        } else if (computerChoice === 'paper'){
            return 'You Win!';
        } else if (computerChoice === 'rock') {
            return 'You Lose!';
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice("scissors");
    const computerChoice = getComputerChoice();
    console.log('The User chose ' + userChoice + 
'\n' + 'The Computer chose ' + computerChoice + '\n' + 'THE OUTCOME IS ' + determineWinner(userChoice, computerChoice));
};

playGame();