//Variable section

const cards = document.querySelectorAll('.memory-card');
let time = document.querySelector('.time');
let seconds = 0;
let moves = document.querySelector('.moves');
let move = 0;

let pairsFound = 0;

let hasFlippedCard = false;
let twoCardsFlipped = false;
let firstCard, secondCard;

//Gameplay Setcion

function flipcard() {
	if (twoCardsFlipped) return;
	if (this === firstCard) return;
	this.classList.toggle('flip');

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;

		return;
	} else {
		hasFlippedCard = false;
		secondCard = this;
		checkMatch();
	}
}

function checkMatch() {
	let isMatch = firstCard.dataset.name === secondCard.dataset.name;
	isMatch ? itsAMatch() : noMatch();
}

function itsAMatch() {
	firstCard.removeEventListener('click', flipcard);
	secondCard.removeEventListener('click', flipcard);
}

function noMatch() {
	twoCardsFlipped = true;
	setTimeout( _ => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		twoCardsFlipped = false;
		}, 1200);
}

function countMoves() {
	[hasFlippedCard, twoCardsFlipped] = [false, false];
	[firstCard, secondCard] = [null, null];
	move += 1;
	moves.innerText = `${move}`;
}

//Win section

function win() {
	pairsFound += 1;
	if (pairsFound === 9) {
		let finalMoves = document.querySelector('.finalmoves');
		finalMoves.innerText = `${move}`;
	}
}

//Functionality and Cache(Highscore)

(function shuffle() {
	cards.forEach(card => {
		let randomNum = Math.floor(Math.random() * 18);
		card.style.order = randomNum;
	})
})();

function setInterval() {
	seconds += 1;
	time.innerText = `${seconds}`;
} 1000;
cards.forEach(card => card.addEventListener('click', flipcard));



//modal content//

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button")

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);