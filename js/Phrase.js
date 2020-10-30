/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const parentDivUl = document.querySelector('#phrase ul')
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
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
    checkLetter(eventTargetText) {
        if (this.phrase.includes(eventTargetText)){
            return true;
        } else{
            return false;
        }
    }
    showMatchedLetter(eventTargetValue) {
        const matchedLi = document.querySelectorAll(`.${eventTargetValue}`);
        console.log(matchedLi);
        matchedLi.forEach(letter => letter.className = `show letter ${eventTargetValue}`);
        // matchedLi.className = `show letter ${eventTargetValue}`;
    }
 }