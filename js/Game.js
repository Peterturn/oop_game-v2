/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //A game consturctor to handle the start and end of the game.
class Game {
  constructor(){
    this.missed = 0;
    this.correctKeys = 0;
    //a the selection of a phrase objects for the game.
    this.phrases =[{phrase:'Money Talks'}, {phrase: 'Love Eat Pray'}, {phrase: 'Show me the money'}, {phrase:'raining cats and dogs'}, {phrase: 'Holy Cow Batman'}, {phrase: 'Pray Often'} ];
    this.activePhrase = null;
    this.correctGuess = true;
  }
// A randomPhrase getter from the array of phrases
  get randomPhrase(){
    var randomNum = Math.floor(Math.random() * this.phrases.length );
    var grabPhrase = this.phrases[randomNum].phrase;
    return grabPhrase;
  }
/*
getter returns the current value of 'this.phrases' and starts at null and once the addEventListener is triggered the 'setter' will then update the  'this.activePhrase.'
*/
  get currentPhrase(){
    return this.activePhrase;
  }
  set currentPhrase(actPhrase){
    this.activePhrase = actPhrase;
  }

//Add Notes
  startGame(){
    //turns off the start game display
    startScreen.style.display = 'none';
    //adds phrase to display
    phrase.addPhraseToDisplay();
    //sets currentPhrase
    game.currentPhrase = phrase;

    //Logs the phrase to the console.
    console.log(phrase.phrase);
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
  gameOver(){
    if(this.missed === 5){
      startScreen.className = 'lose';
      startScreen.style.display = '';
    }
    else{
      startScreen.className = 'win';
      startScreen.style.display = '';
    }
  }

  //----Stuck here. neeed to figure out how to match exact string to exact string.
  //this.correct keys only works if no repeating numbers... create reduced array?
  //or take reduced array and try to use match()
  //test value against className('show') if show.length = correctLettersArrJoined.length
  checkForWin(){

      if (letterShown.length === correctLettersArrJoined.length){
        this.gameOver();
      }

  }

  //Handles game interactions
  handleInteraction(valueOf){

    phrase.showMatchedLetter(valueOf);
    if(phrase.checkLetter(valueOf)){
        valueOf.className = 'chosen';
        valueOf.disabled = true;
        this.correctKeys += 1;
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
