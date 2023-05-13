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
const playAgainBtn = document.getElementById("replay-button")
const startBtn = document.getElementById("start")
const startModalEl = document.getElementById("start-modal")
const endModalEl = document.getElementById("end-modal")
const endMessageEl = document.getElementById("end-message")
const playerGuessEl = document.getElementById("guess-limit")
const boardEl = document.querySelector('#board')
/*----- event listeners -----*/
playAgainBtn.addEventListener('click', restartGame);
startBtn.addEventListener('click', startGame)
/*----- functions -----*/

function startGame() {   //initiate game and randomize the order  of the cards
    startModalEl.classList.add('inactive');
    cardRandomize();
    handleClick();
}

function handleClick() {    // handles the player choices of cards 
    cardsEl.forEach((card) => {
        card.addEventListener('click', function() {
            if (!firstChoice && !secondChoice) { // reveal the first card clicked and make it the first choice if none are chosen
                card.classList.toggle('un-flipped')
                card.classList.toggle('flipped')
                firstChoice = card;
            } else if (firstChoice && !secondChoice) { // reveal the second card clicked and make it the second choice if a first has been chosen
                card.classList.toggle('un-flipped')
                card.classList.toggle('flipped')
                secondChoice = card;
                if (firstChoice.innerHTML === secondChoice.innerHTML) { //match the images of the card using their HTML tags
                    firstChoice.style.pointerEvents = 'none' //disable the two matching cards from being picked again and keep them revealed
                    secondChoice.style.pointerEvents = 'none'
                    firstChoice = null  // clear first choice
                    secondChoice = null// clear second choice
                    matchCount++ //increase count of corret matches by one
                } else {      // handle mismatched cards
                    setTimeout(() => { // slightly delay the card hiding so both are seen
                        firstChoice.classList.toggle('un-flipped') //hide first choice
                        firstChoice.classList.toggle('flipped')
                        secondChoice.classList.toggle('un-flipped') //hide second choice
                        secondChoice.classList.toggle('flipped')
                        firstChoice = null; // clear first choice
                        secondChoice = null; // clear second choice
                    }, 800)
                    playerGuesses-- // if cards didn't match remove one guess from player
                }
            }
            renderGuesses() //show new amount of remaining guesses
            checkWin() // check to see if player has won or lost
        });
    })
}

function checkWin() {
    if (matchCount >= 8 && playerGuesses >= 0) { // if player has matched all the cards and they still have guesses to spare they win
        endModalEl.classList.remove("inactive") // show  modal
        endMessageEl.innerText = `Congrats! You've Won!` // show win message
        boardEl.style.pointerEvents = 'none' // make board un-clickable
    } else if (matchCount < 8 && playerGuesses < 0) { // if player has run out of guesses before matching all cards they lose
        playerGuessEl.innerText = `Guesses Left: 0` // hold final guess count to 0 
        endModalEl.classList.remove("inactive") // show modal
        endMessageEl.innerText = `Better Luck Next Time...` // show loss message
        boardEl.style.pointerEvents = 'none' // make board un-clickable
    }
}

function renderGuesses() {
    playerGuessEl.innerText = `Guesses Left: ${playerGuesses}` //make guess element show how many current guesses are left
}

function cardRandomize() {
    cardsEl.forEach(function(card) {
        let randomNum = Math.floor(Math.random() * 16);  //pick a random number between 1 and 16     
        card.style.order = randomNum; // assign that number to a cards order
    });    
}


function restartGame() { // restart game by reloading the page
    window.location.reload()
}