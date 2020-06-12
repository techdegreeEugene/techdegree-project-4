/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();

	}

	/**
	* Display phrase on game board
	*/

	addPhraseToDisplay() {
		let letterPlaceHolderUl = document.querySelector("#phrase ul");
		let frases = this.phrase;
		// console.log(frases);
		// console.log(frases.length);
		// console.log(frases[1]);
		for ( let i = 0; i < frases.length; i++) {
			if(frases[i] === " ") {
		let letterPlaceHolderLi = document.createElement("li");
		letterPlaceHolderLi.className = "space";
		letterPlaceHolderLi.textContent = " ";	
		letterPlaceHolderUl.appendChild(letterPlaceHolderLi);	
			} 
		else {
		let letterPlaceHolderLi = document.createElement("li");
		letterPlaceHolderLi.className = "hide letter " + frases[i];
		letterPlaceHolderLi.textContent = frases[i];	
		letterPlaceHolderUl.appendChild(letterPlaceHolderLi);					
			};
		};
	};

	/**
	* Checks if passed letter is in phrase
	* @param (string) letter - Letter to check
	*/
	checkLetter(letter) {
		if(this.phrase.includes(letter)) {
			return true;
		} else { 
			return false;
	}
}

	/**
	* Displays passed letter on screen after a match is found
	* @param (string) letter - Letter to display
	*/


//  select all of the letter DOM
// elements that have a CSS class name that matches the selected letter and
// replace each selected element's `hide` CSS class with the `show` CSS class.
	showMatchedLetter(letter) {
	let lis1 = document.querySelectorAll("li");
	for (let k = 0; k < lis1.length; k++) {
		if(lis1[k].textContent === letter) {
			lis1[k].className = "show letter " + letter;
		}


	}

	};
};
	



