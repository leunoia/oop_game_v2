/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// const phraseArray = [new Phrase ('Piece of cake'),new Phrase ('Spill the Beans'),new Phrase ('Break a leg'),new Phrase ('Knock on wood'),new Phrase ('Under the weather')];
const startOverlay = document.querySelector('#overlay');
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase ('Piece of cake'),new Phrase ('Spill the Beans'),new Phrase ('Break a leg'),new Phrase ('Knock on wood'),new Phrase ('Under the weather')];
        this.activePhrase = null;
    }
    // This methods starts the game by clearing any previous instances and then selecting a random quote. This random quote is then displayed for the user. 
    startGame(){
        this.missed = 0;
        const phraseParentDiv = document.querySelector('#phrase ul');
        phraseParentDiv.innerHTML = '';
        const keys = document.querySelectorAll('#qwerty button');
        keys.forEach(key => key.className = 'key')
        keys.forEach(key => key.disabled = false);
        const ol = document.querySelectorAll('.tries img');
        this.missed = 0;
        ol.forEach(heart => heart.src = 'images/liveHeart.png');
        startOverlay.style.display = 'none';
        let randomPhrase = this.getRandomQuote(this.phrases); 
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay(randomPhrase.phrase);
    }
    // this gets a random quote out of the quote arrays.
    getRandomQuote(phrases){
        let randomIndex = Math.floor(Math.random()*4);
        return phrases[randomIndex];
    }
    // this method checks to see that the user is pressing the onscreen keyboard buttons. It will highlight the key in a color based on the phrase. 
    handleInteraction(eventTarget){ 
        if(eventTarget.className === 'key'){
            eventTarget.disabled = true;
            const checker = this.activePhrase.checkLetter(eventTarget.textContent);
            if (checker){
                eventTarget.className = 'chosen';
                this.activePhrase.showMatchedLetter(eventTarget.textContent);
            } else{
                eventTarget.className = 'wrong';
                this.removeLife();
            }
            this.checkForWin();   
        }
    }
    // This method removes the lives each time a user gets the selection wrong. They are allowed 5 lives and after that they can't make any mistakes
    // If they lose all five lifes they can still win if they get the rest correct. 
    removeLife(){
        if(this.missed < 5){
            const ol = document.querySelectorAll('.tries img');
            this.missed += 1;
            const tryIndex = this.missed - 1;
            ol[tryIndex].src = 'images/lostHeart.png';
        } else {
            console.log(this.missed);
            this.gameOver();   
        }
        

    }
    // this checks to see if the user has selected all of the correct letters
    checkForWin(){
        const correctLetter = document.querySelectorAll('.show');
        const phraseCharacterLength = this.activePhrase.phrase.replace(/ /g, "");
        if (correctLetter.length === phraseCharacterLength.length) {
            this.gameOver();
       }
    }
    // this method is called whenever the game is over and has two outcomes based on if the user won or lost. 
    gameOver(){
        const h1 = document.querySelector('#game-over-message');
        const correctLetter = document.querySelectorAll('.show');
        const phraseCharacterLength = this.activePhrase.phrase.replace(/ /g, "");
        if(this.missed === 5){
            startOverlay.style.display = ''; 
            h1.textContent = 'Game Over! Try Again :)';
            startOverlay.className = 'lose';
            this.activePhrase = '';
        }else if (correctLetter.length === phraseCharacterLength.length){
            startOverlay.style.display = ''; 
            h1.textContent = 'Congratulations! You Won!';
            startOverlay.className = 'win';  
            this.activePhrase = '';
        }
        // startOverlay.style.display = ''; 
        // h1.textContent = 'Congratulations! You Won!';
        // startOverlay.className = 'win';  
        
    }
}