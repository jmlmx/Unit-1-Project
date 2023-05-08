/*----- constants -----*/
const guessLimit = 10
const randomization = []
/*----- state variables -----*/
let playerGuesses = 0
let imagesPack = []
let winner
let board
/*----- cached elements  -----*/
const boxEls = document.querySelectorAll("#board > div")
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
boxRandomize()
render()
}

function startGame() {
    modalEl.classList.add('inactive');
    boxRandomize()
    //render()
}

function handleClick(boxEls) {
    boxEls.addEventListener('click', checkMatch)
    renderBoard()
}

function renderBoard() {

}

function boxRandomize() {
    boxEls.forEach(function(boxEl) {
        let randomNum = math.floor(Math.random() * 16)
        boxEls.style.order = randomNum
    })
}

function checkMatch() {
    let choices = {
        "guess1": null,
        "guess2": null
    }

    let matchCount = 0

    if (!choices[guess1] && !choices[guess2]) {
        choices[guess1] = boxEl
        boxEl.classList.add('shown')
    } else if (choices[guess1] && !choices[guess2]) {
        choices[guess2] = boxEl
        boxEl.classList.add('shown')
            if (choices[guess1].img === choices[guess2]) {
                choices[guess1].style.pointerEvents = "none"
                choices[guess2].style.pointerEvents = "none"
                choices[guess1] = null
                choices[guess2] = null
                matchCount++
                if (matchCount === 8) setTimeout(() => alert('You Won! Congratulations!'), 2000)
            } else {
                choices[guess1].classList.add('hidden')
                choices[guess2].classList.add('hidden')
                playerGuesses++
                setTimeout(() => {
                    choices[guess1].classList.remove('shown')
                    choices[guess2].classList.remove('shown')
                    choices[guess1].classList.remove('hidden')
                    choices[guess2].classList.remove('hidden')
                    choices[guess1] = null
                    choices[guess2] = null
                }, 2000)    
            }
        }    
}

function restart() {
    
}


