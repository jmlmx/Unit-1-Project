/*----- constants -----*/
const guessLimit = 20
const randomization = []
/*----- state variables -----*/
let playerGuesses = guessLimit
let firstChoice = null
let secondChoice = null
let matchCount = 0           
/*----- cached elements  -----*/
const cardsEl = document.querySelectorAll("#card")
const playAgainBtn = document.getElementById("#replay-button")
const startBtn = document.getElementById("start")
const startModalEl = document.getElementById("start-modal")
const endModalEl = document.getElementById("end-modal")
const playerGuessEl = document.getElementById("guess-limit")
const boardEl = document.querySelector('#board')
/*----- event listeners -----*/
//playAgainBtn.addEventListener('click', restart);
startBtn.addEventListener('click', startGame)
/*----- functions -----*/

function Init() {
cardRandomize()
}

function startGame() {
    startModalEl.classList.add('inactive');
    cardRandomize();
    handleClick();
}

function handleClick() {   
    cardsEl.forEach((card) => {
        card.addEventListener('click', function() {
            if (!firstChoice && !secondChoice) {
                card.classList.toggle('un-flipped')
                card.classList.toggle('flipped')
                firstChoice = card;
            } else if (firstChoice && !secondChoice) {
                card.classList.toggle('un-flipped')
                card.classList.toggle('flipped')
                secondChoice = card;
                if (firstChoice.innerHTML === secondChoice.innerHTML) {
                    firstChoice.style.pointerEvents = 'none'
                    secondChoice.style.pointerEvents = 'none'
                    firstChoice = null
                    secondChoice = null
                    matchCount++
                } else {
                    setTimeout(() => {
                        firstChoice.classList.toggle('un-flipped')
                        firstChoice.classList.toggle('flipped')
                        secondChoice.classList.toggle('un-flipped')
                        secondChoice.classList.toggle('flipped')
                        firstChoice = null;
                        secondChoice = null;
                    }, 800)
                    playerGuesses--
                }
            }
            renderGuesses()
            checkWin()
        });
    })
}

function checkWin() {
    if (matchCount >= 8 && playerGuesses > 0) {
        endModalEl.classList.remove("inactive")
        endModalEl.innerHTML = `<h1>Congrats! You've Won!</h1>`
        //make play again button appear! 
        boardEl.style.pointerEvents = 'none'
    } else if (matchCount < 8 && playerGuesses < 0) {
        endModalEl.classList.remove("inactive")
        endModalEl.innerHTML = `<h1>Better Luck Next Time...</h1>`
        //make play again button appear! 
        boardEl.style.pointerEvents = 'none'
        playerGuessEl.innerText = `Guesses Left: 0`
    }
}

function renderGuesses() {
    playerGuessEl.innerText = `Guesses Left: ${playerGuesses}`
}

function cardRandomize() {
    cardsEl.forEach(function(card) {
        let randomNum = Math.floor(Math.random() * 16);        
        card.style.order = randomNum;
    });    
}

//function restartGame() {}