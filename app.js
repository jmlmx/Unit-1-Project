/*----- constants -----*/
const guessLimit = 10
const randomization = []
/*----- state variables -----*/
let playerGuesses = 0
let imagesPack = []
let guessesLeft = guessLimit - playerGuesses
let choices = {
    "guess1": null,
    "guess2": null
}
let winner
let board
/*----- cached elements  -----*/
const boxEls = [...document.querySelectorAll("#board > div")]
const playAgainBtn = document.querySelector("replay-button")
const startBtn = document.getElementById("start")
const modalEl = document.getElementById("start-modal")
const playerGuessEl = document.getElementById("player-guesses")
/*----- event listeners -----*/
//playAgainBtn.addEventListener('click', restart);
startBtn.addEventListener('click', startGame);
/*----- functions -----*/

function Init() {
board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
winner = false
render()
}

function startGame() {
    modalEl.classList.add('inactive');

}

function handleClick(evt) {
    checkMatch()
}

function renderBoard() {

}

function renderGuessesLeft() {
    
}

function checkMatch(choice1, choice2) {

}

function restart() {

}


