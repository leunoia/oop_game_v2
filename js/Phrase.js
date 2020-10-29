/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const parentDiv = document.querySelector('#phrase ul')
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay (phrase){
        const phraseArray = phrase.split();
        phraseArray.forEach(phrase => {
            const li = document.createElement('li');
            if (phrase !== ' '){
            li.className = `hide letter ${phrase}`
            li.textContent = phrase; 
            }else {
            li.className = `space`  
            li.textContent = phrase;
            }
            parentDiv.appendChild(li);
        })
    };
    checkLetter(input) {
       if (input === phrase){
           return true;
       }
       return false;
    }
    showMatchedLetter() {
        if(input === 'phrase'){
            li.className = `show letter ${phrase}`
        }
    }
 }