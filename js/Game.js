/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 let frases;
 class Game {
 	constructor() {
 		this.missed = 0;
 		this.phrases = this.createsPhrases();
 		this.activePhrase = null;
	}

	/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/


	createsPhrases() {
		
	 frases = [new Phrase('A Dime a Dozen'),
 		new Phrase("A Fool and His Money Are Soon Parted"),
 		new Phrase("A Piece of Cake"),
 		new Phrase("An Arm and a Leg"),
 		new Phrase("Back to Square One")];
 		return frases;
 		
	}


	/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
	getRandomPhrase() {
		const randomPhrase = this.phrases[Math.floor(Math.random() * (this.phrases.length))];
		return randomPhrase;

};
	/**
	* Begins game by selecting a random phrase and displaying it to user
	*/
	startGame() {
		document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
    	this.activePhrase.addPhraseToDisplay();
	}
	
	handleInteraction(e) {
		console.log(e.target.textContent);
		e.target.disabled = true;
		console.log(e.target);
		if(!this.activePhrase.checkLetter(e.target.textContent)) {
			e.target.className = "wrong";
			this.removeLife();
		} else {
			e.target.className = "chosen";
			this.activePhrase.showMatchedLetter(e.target.textContent);
			if (this.checkForWin(true)) {
				this.gameOver();
			}

		}



	}
	/**
	* Checks for winning move
	* @return {boolean} True if game has been won, false if game wasn't
	won
	*/
	checkForWin() {
	let lis = document.querySelectorAll("li");
		for (let j = 0; j < lis.length; j++) {
			if(lis[j].className.charAt(0) === "h") {
				return false;
			} else {
				return true;
			}
		};
	}
	/**
	* Increases the value of the missed property
	* Removes a life from the scoreboard
	* Checks if player has remaining lives and ends game if player is out
	*/
	removeLife() {
		let lives = document.getElementsByTagName("img");
		if (this.missed === 4) {
			this.gameOver() 
		} else {
			lives[this.missed].src = "images/lostHeart.png"
		}
		this.missed += 1;
	};

	/**
	* Displays game over message
	* @param {boolean} gameWon - Whether or not the user won the game
	*/
		
		// depending on the outcome of the game, updates the overlay `h1` element with a
		// friendly win or loss message, and replaces the overlay’s `start` CSS class with
		// either the `win` or `lose` CSS class.

	gameOver(gameWon) {
	document.querySelector('#overlay').style.display = 'block';
	if (gameWon) {
		document.querySelector('h1').textContent = "Congratulations. You've Won";
		document.querySelector('#overlay').className = 'win';

	} else {
		document.querySelector('h1').textContent = "So Close. Play Again";
		document.querySelector('#overlay').className = 'lose';
	}



	};

	reset() {
		let letterPlaceHolderUl = document.querySelector("#phrase ul"); // Remove all `li` elements from the Phrase `ul` element.
		letterPlaceHolderUl.innerHTML = " ";
		// Enable all of the onscreen keyboard buttons and update each to use the `key` CSS class,
		//and not use the `chosen` or `wrong` CSS classes.
		let key1 = document.getElementsByClassName("key");
		for ( let l = 0; l < key1.length; l++) {
			key1[l].disabled = false;
			key1[l].className = "key";
			}
			let lives = document.getElementsByTagName("img");		
			lives[0].src = "images/liveHeart.png";
			lives[1].src = "images/liveHeart.png";
			lives[2].src = "images/liveHeart.png";
			lives[3].src = "images/liveHeart.png";
			lives[4].src = "images/liveHeart.png";
	}
}