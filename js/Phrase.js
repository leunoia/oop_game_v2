/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const parentDivUl = document.querySelector('#phrase ul')
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    // This is method that addes the HTML element that correspond to the phrase object.
    addPhraseToDisplay (phrase){
        const characterArray = [...phrase];
            characterArray.forEach(character => {
                const li = document.createElement('li');
                if (character!== ' '){
                li.className = `hide letter ${character}`;
                li.textContent = character;
                parentDivUl.appendChild(li);
                }else {
                li.className = 'space';
                li.textContent = ' ';
                parentDivUl.appendChild(li);
                } 
            })
    };
    // this checks to see if the user selected the correct letter.
    checkLetter(eventTargetText) {
        if (this.phrase.includes(eventTargetText)){
            return true;
        } else{
            return false;
        }
    }
    // this will make the correct letter visible when they are selected.
    showMatchedLetter(eventTargetValue) {
        const matchedLi = document.querySelectorAll(`.${eventTargetValue}`);
        matchedLi.forEach(letter => letter.className = `show letter ${eventTargetValue}`);
    }
 }