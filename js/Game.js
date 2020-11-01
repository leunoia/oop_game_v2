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
    startGame(){
        const phraseParentDiv = document.querySelector('#phrase ul');
        phraseParentDiv.innerHTML = '';
        const keys = document.querySelectorAll('#qwerty button');
        keys.forEach(key => key.className = 'key');
        const ol = document.querySelectorAll('.tries img');
        ol.forEach(heart => heart.src = 'images/liveHeart.png');
        startOverlay.style.display = 'none';
        let randomPhrase = this.getRandomQuote(this.phrases); 
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay(randomPhrase.phrase);
    }
    getRandomQuote(phrases){
        let randomIndex = Math.floor(Math.random()*4);
        return phrases[randomIndex];
    }
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
    checkForWin(){
        const correctLetter = document.querySelectorAll('.show');
        const phraseCharacterLength = this.activePhrase.phrase.replace(/ /g, "");
        if (correctLetter.length === phraseCharacterLength.length) {
            this.gameOver();
       }
    }
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