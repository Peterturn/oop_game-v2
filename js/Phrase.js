/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
  constructor(phrased){
      this.phrase = phrased.toLowerCase()
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
  checkLetter(valueOf){
         if (doSomething.test(valueOf)){
            console.log()
             return true;
         } else {
             return false;
         }
     }

  showMatchedLetter(valueOf){
    //forLoop runs though the 'li' array and shows matched letter on click event.
    for (let i=0; i <hiddenLetters.length; i++){
      if(hiddenLetters[i].innerText === valueOf.textContent){
        //console.log('true');
        hiddenLetters[i].className = 'show';
      }
    }

  /*the 2nd forLoop passesover the new list of hiddenLetters. The second loop is there for dynamic programing should someone add a double letter word. If 2 identical letter i.e. 'tt, ss...' are present in the hidden phrase the fist letter is removed from the array and the new position of the next letter is in the current [i]. In order to select the duplicate that are next to each other the a second iteration is needed.  */
    for (let j=0; j <hiddenLetters.length; j++){
      if(hiddenLetters[j].innerText === valueOf.textContent ){
        //console.log('true');
        hiddenLetters[j].className = 'show';
      }
    }
  }
}
