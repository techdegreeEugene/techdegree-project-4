/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase();
// const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);


//Now that you've added code to initialize and populate the Game class `phrases` property,
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// `getRandomPhrase()` method, let's add more
// temporary code to the app.js file to ensure that everything is working properly.
// const logPhrase = (phrase) => {
// console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


var game = new Game();
document.querySelector("#btn__reset").addEventListener("click", (e) => {
	
	e.target = game.startGame();
});



// game.activePhrase.checkLetter('a');

// game.activePhrase.showMatchedLetter("a");

	/**
	* Handles onscreen keyboard button clicks
	* @param (HTMLButtonElement) button - The clicked button element
	*/
		
		let key1 = document.getElementById("qwerty");
		key1.addEventListener("click", (e) => {
		if (e.target.className === "keyrow") {
		} else { 
		game.handleInteraction(e);

	}
})

