/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
  constructor(phrase){
      this.phrase = phrase.toLowerCase()
  }

  //  Methode to display phrase on game board
  addPhraseToDisplay(){
    const phraseSection = document.getElementById('phrase').firstElementChild;
    const phraseSplit = this.phrase.split('');
    //console.log(phraseSplit);
    //loop that adds className for each 'letter' and 'space.' It then appends each as an 'li' to the 'ul' in the phrase section of the html.
    for (let i = 0; i<phraseSplit.length; i++){
      const li = document.createElement('li');
      if(phraseSplit[i]!==' '){
      li.id = 'phrase love';
      li.className = 'hide letter';
      li.innerText = phraseSplit[i];
      phraseSection.appendChild(li);
    }else{
      li.id = 'phrase love';
      li.className = 'hide space';
      li.innerText = ' ';
      phraseSection.appendChild(li);}
    }
  }


  /*checkLetter() checks if a letter is in the phrase the game phrase
  and returns a boolean value.*/
  checkLetter(){
            //console.log(hiddenLetters);
    //forLoop runs though the 'li' array and returns a boolean value.
      for (let i=0; i <hiddenLetters.length; i++){
        let innerTextOf = hiddenLetters[i].innerText;
        //console.log(innerTextOf);
        if(innerTextOf === valueOf){
          //console.log('true');
         return true;
        }
      }
    }
  showMatchedLetter(){
    //forLoop runs though the 'li' array and shows matched letter on click event.
    for (let i=0; i <hiddenLetters.length; i++){
      if(hiddenLetters[i].innerText === valueOf ){
        console.log('true');
        hiddenLetters[i].className = 'show';
      }
    }
  /*the 2nd forLoop double checks to make sure a letter wasn't missed. Was having a bug were double letters like in the word "apple" only the first "p" would appear.*/
    for (let j=0; j <hiddenLetters.length; j++){
      if(hiddenLetters[j].innerText === valueOf ){
        console.log('true');
        hiddenLetters[j].className = 'show';
      }
    }
  }
}
