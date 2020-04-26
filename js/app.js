/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const phrase = new Phrase(game.randomPhrase);

const virtualBoardKeys = document.getElementById('qwerty');
const keys = document.getElementsByClassName('key');
const startBtn = document.getElementById('btn__reset');
const startScreen = document.getElementById('overlay');
// const hiddenLetters returns an array of HTML 'li' items.
const hiddenLetters = document.getElementsByClassName('hide letter');
let clickedLettersArr = []
const revealedLetter = document.getElementsByClassName('show');

startBtn.addEventListener('click', () => {
  game.startGame();
});

//listens for user interactions
virtualBoardKeys.addEventListener('click',(e)=>{
  let valueOf = e.target.textContent;
  //console.log(valueOf);
  phrase.checkLetter(valueOf);
  phrase.showMatchedLetter(valueOf);
  game.handleInteraction(valueOf);
})
