/*----- constants -----*/
const guessLimit = 10
const pointsAdded = 100
/*----- state variables -----*/
let playerGuesses = 0
let playerScore = 0
let imagePack = []
let guessesLeft = guessLimit - playerGuesses
let multiplier = guessesLeft
let choice1
let choice2
let winner
let finalScore = pointsAdded * guessesLeft
let board
/*----- cached elements  -----*/
const boxEls = [...document.querySelectorAll('#board > div')]
const playAgainBtn = document.querySelector('button')
const startBtn = document.querySelector('start')

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', handleClick)
startBtn.addEventListener('click', startGame)
/*----- functions -----*/
Init()

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
    $(".mask").removeClass("active");
    Init()
    render()
}

function handleClick(evt) {
    const colIdx = boxEls.indexOf(evt.target)
}

