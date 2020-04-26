/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const phrase = new Phrase(game.randomPhrase);
let valueOf;

const virtualBoardKeys = document.getElementById('qwerty');
const keys = document.getElementsByClassName('key');
const startBtn = document.getElementById('btn__reset');
const startScreen = document.getElementById('overlay');
// const hiddenLetters returns an array of HTML 'li' items.
const hiddenLetters = document.getElementsByClassName('hide letter');
let clickedLettersArr = []

startBtn.addEventListener('click', () => {
  game.startGame();
});

//listens for user interactions
virtualBoardKeys.addEventListener('click',(e)=>{
  valueOf = e.target.textContent;
  //array captures the clicked letters for later use.
  clickedLettersArr.push(valueOf);
  //console.log(valueOf);
  console.log(clickedLettersArr);
  phrase.checkLetter();
  phrase.showMatchedLetter();
  //game.handleInteraction();
})
