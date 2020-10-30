/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// const phraseArray = [new Phrase ('Piece of cake'),new Phrase ('Spill the Beans'),new Phrase ('Break a leg'),new Phrase ('Knock on wood'),new Phrase ('Under the weather')];

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase ('Piece of cake'),new Phrase ('Spill the Beans'),new Phrase ('Break a leg'),new Phrase ('Knock on wood'),new Phrase ('Under the weather')];
        this.activePhrase = null;
    }
    startGame(){
        const startOverlay = document.querySelector('#overlay');
        startOverlay.style.display = 'none';
        const randomPhrase = this.getRandomQuote(this.phrases);
        this.activePhrase = randomPhrase;
    }
    getRandomQuote(phrases){
        let randomIndex = Math.floor(Math.random()*4);
        // this.activePhrase = phrases[randomIndex].phrase;
        return phrases[randomIndex].phrase;
    }
    handleInteraction(eventTarget){
        eventTarget.disabled = true;
    }
    removeLife(){
        if(this.missed < 5){
            const ol = document.querySelectorAll('.tries img');
            this.missed += 1;
            const tryIndex = this.missed - 1;
            ol[tryIndex].src = 'images/lostHeart.png';
        }
        this.gameOver();

    }
