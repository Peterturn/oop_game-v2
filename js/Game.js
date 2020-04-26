/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//A game consturctor to handle the start and end of the game.
class Game {
  constructor() {
    this.missed = 0;
    //a the selection of a phrase for the game
    this.phrases = [/*'Money Talks', 'Love Eat Pray', 'Show me the money','Power shows your true nature', 'Speak softly and carry a big stick', 'raining cats and dogs', 'Holy Cow Batman', 'Pray Often', */'Like a slice of apple pie', 'Hopelessness Makes the Heart sick'];
    this.activePhrase = null;
  }
  // A randomPhrase getter from the array of phrases
  get randomPhrase() {
    var randomNum = Math.floor(Math.random() * this.phrases.length);
    var grabPhrase = this.phrases[randomNum];
    return grabPhrase;
  }
  /*
  getter returns the current value of 'this.phrases' and starts at null and once the addEventListener is triggered the 'setter' will then update the  'this.activePhrase.'
  */
  get currentPhrase() {
    return this.activePhrase;
  }
  set currentPhrase(actPhrase) {
    this.activePhrase = actPhrase;
  }

  startGame() {
    startScreen.style.display = 'none';
    phrase.addPhraseToDisplay();
    game.currentPhrase = phrase;
    console.log(phrase.phrase);
  }
  handleInteraction(valueOf) {
    for (let i = 0; i < keys.length; i++)
      if (keys[i].innerText === valueOf) {
        keys[i].disabled = 'true';
        keys[i].style.opacity = '0.5';

      }
  }
}
