/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //A game consturctor to handle the start and end of the game.
class Game {
  constructor(){
    this.missed = 0;
    //a the selection of a phrase objects for the game.
    this.phrases =[{phrase:'Money Talks'}, {phrase: 'keep it simple'}, {phrase: 'Show me the money'}, {phrase:'let it go'}, {phrase: 'Holy Cow Batman'}, {phrase: 'Pray Often'} ];
    this.activePhrase = null;
    this.correctGuess = true;
  }

// A randomPhrase getter from the array of phrases
  get randomPhrase(){
    var randomNum = Math.floor(Math.random() * this.phrases.length );
    var grabPhrase = this.phrases[randomNum].phrase;
    return grabPhrase;
  }

//Add Notes

  startGame(){
    //turns off the start game display
    startScreen.style.display = 'none';
    //adds phrase to display
    aPhrase.addPhraseToDisplay();
    // //sets currentPhrase
    // game.currentPhrase = phrase;

    //Logs the phrase to the console.
    console.log(aPhrase.phrase);
    /*for-loop pushes letters to an empty array which then .joined by the 'correctLettersArrJoined' and put into a string for easy testing by the checkLetter methode.*/
    for (let i=0; i <hiddenLetters.length; i++){
    correctLettersArr.push(hiddenLetters[i].innerText);
    }


    //between 'correctLettersArrJoined' and 'doSomething' a string is created for the checkLetter methode to test and create a boolean value.
    correctLettersArrJoined = correctLettersArr.join('');
    doSomething = `[${correctLettersArrJoined}]`;
  }

  //removes a liveHeart img and replaces it with the lostHeart img.
  removeLife(){
    const liveHearts = document.querySelectorAll("img");
    if(this.missed === 1){
      liveHearts[4].src = 'images/lostHeart.png';
    //  console.log('removeLife1');
    }
    if(this.missed === 2){
      liveHearts[3].src = 'images/lostHeart.png';
      //console.log('removeLife2');
    }
    if(this.missed === 3){
      liveHearts[2].src = 'images/lostHeart.png';
      //console.log('removeLife3');
    }
    if(this.missed === 4){
      liveHearts[1].src = 'images/lostHeart.png';
      //console.log('removeLife4');
    }
    if(this.missed === 5){
      liveHearts[0].src = 'images/lostHeart.png';
      //console.log('removeLife5');
      this.gameOver();
    }
  }

  resetHearts(){
    const liveHearts = document.querySelectorAll("img");
      for (let i = 0; i < liveHearts.length; i++){
        liveHearts[i].src = 'images/liveHeart.png';
        this.missed = 0;
      }
  }
  //Add notes
  gameOver(){
    if(this.missed === 5){
      startScreen.className = 'lose';
      startScreen.style.display = '';
      aPhrase.removePhrase();
      aPhrase.removeClickesOnLetters();
      this.resetHearts();
      correctLettersArr = [];

    }
    else{
      startScreen.className = 'win';
      startScreen.style.display = '';
      aPhrase.removePhrase();
      aPhrase.removeClickesOnLetters();
      this.resetHearts();
      correctLettersArr = [];

    }
  }

//add notes
  checkForWin(){

      if (letterShown.length === correctLettersArrJoined.length){
        this.gameOver();
      }
  }

  //Handles game interactions
  handleInteraction(valueOf){

    aPhrase.showMatchedLetter(valueOf);
    if(aPhrase.checkLetter(valueOf)){
        valueOf.className = 'chosen';
        valueOf.disabled = true;
    }else{
        valueOf.className = 'wrong';
        valueOf.disabled = true;
    }


    //const selects className 'wrong'.
    const keysWrong = document.getElementsByClassName('wrong');
    /*For-Loop runs throught the keys that have className 'wrong' and adds to the count of 'this.missed'. */
    for (let i=0; i <keysWrong.length; i++){
      this.missed = keysWrong.length;
      console.log(this.missed);
    }
    this.removeLife();
    this.checkForWin();
  }

}
