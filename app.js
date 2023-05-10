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
const startModalEl = document.getElementById("start-modal")
const endModalEl = document.getElementById("end-modal")
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
    startModalEl.classList.add('inactive');
    boxRandomize()
    handleClick()
    //render()
}

function handleClick() {
    let clickEvt = () => {
        console.log("close")
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

    if (first.innerHTML === second.innerHTML) {
        first.style.pointerEvents = 'none';
        second.style.pointerEvents = 'none';
        first = null;
        second = null;
        matchCount++;
        if (matchCount>= 6) setTimeout(() => alert('Game done! Refresh page to replay.'), 2000 );
    } else {
        first.classList.add('un-flipped');
        second.classList.add('un-flipped');
        setTimeout(() => {
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            first.classList.remove('un-flipped');
            second.classList.remove('un-flipped');
            first = null;
            second = null;
        }, 2000);
    }
}

function restart() {
    
}


