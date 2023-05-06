/*----- constants -----*/
const guessLimit = 10
/*----- state variables -----*/
let playerGuesses = 0
let images = []
let guessesLeft = guessLimit - playerGuesses
let choice1
let choice2
let winner
let board
/*----- cached elements  -----*/
const boxEls = [...document.querySelectorAll('#board > div')]
const playAgainBtn = document.querySelector("replay-button")
const startBtn = document.getElementById("#start")
const modalEl = document.getElementsByClassName("modal")
const playerGuessEl = document.getElementById('player-guesses')
/*----- event listeners -----*/
playAgainBtn.addEventListener('click', handleClick);
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

}

function renderBoard() {

}

function renderGuessesLeft() {

}

render() {
    renderBoard()
    renderGuessesLeft()
    checkWin()
}

