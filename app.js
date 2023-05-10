/*----- constants -----*/
const guessLimit = 10
const randomization = []
/*----- state variables -----*/
let playerGuesses = 0
let imagesPack = []
let winner
let board
/*----- cached elements  -----*/
const cardsEl = document.querySelectorAll("#card")
const playAgainBtn = document.querySelector("replay-button")
const startBtn = document.getElementById("start")
const modalEl = document.getElementById("start-modal")
const playerGuessEl = document.getElementById("player-guesses")
const boardEl = document.querySelector('#board')
/*----- event listeners -----*/
//playAgainBtn.addEventListener('click', restart);
startBtn.addEventListener('click', startGame)
//boardEl.addEventListener('click', handleClick)//
/*----- functions -----*/

function Init() {
board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
boxRandomize()
render()
}

function startGame() {
    modalEl.classList.add('inactive');
    boxRandomize()
    handleClick()
    //render()
}

function handleClick() {
    let clickEvt = () => {
        card.classList.add(".un-flipped")
    }    
    cardsEl.forEach((card) => {
        card.addEventListener('click', clickEvt)
    });
}

function renderBoard() {

}

function boxRandomize() {
    cardsEl.forEach(function(card) {
        let randomNum = Math.floor(Math.random() * 16);        
        card.style.order = randomNum;
    });    
}

function checkMatch() {
    let first
    let second
    let matchCount = 0

    
}


function restart() {
    
}


