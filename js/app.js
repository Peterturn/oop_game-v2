/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
                              //_____VAR LIST_____//

//on click event is used to set up the new game
const game = new Game();
//used to construct and set the current game phrase
const phrase = new Phrase(game.randomPhrase);
const phraseUl = document.getElementById('phrase');
const phraseSection = document.getElementById('phrase').firstElementChild;
const keyBtn = document.querySelectorAll('#qwerty div button');
const virtualBoardKeys = document.getElementById('qwerty');
const keys = document.getElementsByClassName('key');
const keyRows = document.getElementsByClassName('keyrow');
const startBtn = document.getElementById('btn__reset');
const startScreen = document.getElementById('overlay');
// const hiddenLetters returns an array of HTML 'li' items.
const hiddenLetters = document.getElementsByClassName('hide letter');
const revealedLetter = document.getElementsByClassName('show');
let correctLettersArr = [];
let correctLettersArrJoined;
let doSomething;



                    //_____START GAME_____//
startBtn.addEventListener('click', () => {
  game.startGame();
});

//listens for user interactions
document.querySelectorAll('.key').forEach(item => {
  item.addEventListener('click', event => {
    let valueOf = event.target;
    //console.log(valueOf);
    phrase.showMatchedLetter(valueOf);
    game.handleInteraction(valueOf);
    //console.log(`lost hearts = ${game.missed}`);
    })
  })
  let letterShown = document.getElementsByClassName('show');
