/*----- constants -----*/
const guessLimit = 10
const randomization = []
/*----- state variables -----*/
let playerGuesses = 0
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
cardRandomize()
render()
}

function startGame() {
    startModalEl.classList.add('inactive');
    cardRandomize()
    handleClick()
    //render()
}

function handleClick() {   
    cardsEl.forEach((card) => {
        card.addEventListener('click', function() {
            let firstChoice = null
            let secondChoice = null
            let matchCount = 0           
            if (!firstChoice && !secondChoice) {
                firstChoice = card;
                card.classList.toggle('un-flipped')
                card.classList.toggle('flipped')
            } else if (firstChoice && !secondChoice) {
                secondChoice = card;
                card.classList.toggle('un-flipped')
                card.classList.toggle('flipped')
                if (secondChoice.innerHTML === firstChoice.innerHTML) {
                    firstChoice.style.pointerEvents = 'none'
                    secondChoice.style.pointerEvents = 'none'
                    firstChoice = null
                    secondChoice = null
                    matchCount++
                    if (matchCount === 8) setTimeout(() => alert('Game done! Refresh page to replay.'), 2000 )
                } else {
                    firstChoice.classList.toggle('un-flipped')
                    firstChoice.classList.toggle('flipped')
                    secondChoice.classList.toggle('un-flipped')
                    secondChoice.classList.toggle('flipped')
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
        })
    });
}    


function renderBoard() {

}

function cardRandomize() {
    cardsEl.forEach(function(card) {
        let randomNum = Math.floor(Math.random() * 16);        
        card.style.order = randomNum;
    });    
}

function checkMatch() {
    let firstChoice
    let secondChoice
    let matchCount = 0

    if (!firstChoice && !secondChoice) {
        firstChoice = card;
        card.classList.toggle('un-flipped')
        card.classList.toggle('flipped')
        } else if (firstChoice && !secondChoice) {
        secondChoice = card;
        card.classList.toggle('un-flipped')
        card.classList.toggle('flipped');
        if (firstChoice.innerHTML === secondChoice.innerHTML) {
            firstChoice.style.pointerEvents = 'none';
            secondChoice.style.pointerEvents = 'none';
            firstChoice = null;
            secondChoice = null;
            matchCount++;
            if (matchCount>= 8) setTimeout(() => alert('Game done! Refresh page to replay.'), 2000 );
        } else {
            firstChoice.classList.toggle('un-flipped');
            firstChoice.classList.toggle('flipped')
            secondChoice.classList.toggle('un-flipped')
            secondChoice.classList.toggle('flipped');
            setTimeout(() => {
                firstChoice.classList.remove('flipped');
                secondChoice.classList.remove('flipped');
                firstChoice.classList.remove('un-flipped');
                secondChoice.classList.remove('un-flipped');
                firstChoice = null;
                secondChoice = null;
            }, 2000);
        }
    }
}
function restart() {
    
}