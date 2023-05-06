/*----- constants -----*/
const guessLimit = 10
const pointsAdded = 100
/*----- state variables -----*/
let playerGuesses = 0
let playerScore = 0
let images = []
let guessesLeft = guessLimit - playerGuesses
let multiplier = guessesLeft
let choice1
let choice2
let winner
let finalScore = pointsAdded * guessesLeft
let board
/*----- cached elements  -----*/
const boxEls = [...document.querySelectorAll('#board > div')]
const playAgainBtn = document.querySelector("replay-button")
const startBtn = document.getElementById("start")
const modalEl = document.getElementsByClassName("modal")
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
    getFinalScore()
}

