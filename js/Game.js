/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //A game consturctor to handle the start and end of the game.
class Game {
  constructor(){
    this.missed = 0;
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
    startScreen.style.display = 'none';
    phrase.addPhraseToDisplay();
    game.currentPhrase = phrase;
    console.log(phrase.phrase);
    for (let i=0; i <hiddenLetters.length; i++){
    correctLettersArr.push(hiddenLetters[i].innerText);
    }
    correctLettersArrJoined = correctLettersArr.join('');
    doSomething = `[${correctLettersArrJoined}]`;
  }

  handleInteraction(valueOf){
    //console.log('test');
    if(phrase.checkLetter(valueOf)){
        valueOf.className = 'madSkills';
        valueOf.disabled = true;
        valueOf.style.opacity = '0.5';
      }else{
        valueOf.className = 'wrong';
        valueOf.disabled = true;
      }
      // if(correctLettersArr[k] === valueOf.textContent){
      //   //console.log('true');
      //   valueOf.className = 'correct';
      //   valueOf.disabled = true;
      //   valueOf.style.opacity = '0.5';
      // }
    }

}
