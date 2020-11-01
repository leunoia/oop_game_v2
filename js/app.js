/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
const game = new Game();
startButton.addEventListener('click', () => {
    game.startGame(0);
});
keyboard.addEventListener('click', (e)=> {
    game.handleInteraction(e.target);
});