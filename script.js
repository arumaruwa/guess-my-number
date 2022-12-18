'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const dispayMessage = function (message) {
	document.querySelector(`.message`).textContent = message;
};
const changeStyleBackgroundColor = function (color) {
	document.querySelector(`body`).style.backgroundColor = color;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
	const guess = Number(document.querySelector(`.guess`).value);

	if (guess < 1 || guess > 20) {
		dispayMessage(`⛔ Incorrect number!`);
	} else if (guess === secretNumber) {
		if (score > 0) {
			dispayMessage(`🎉 Correct number!`);
			changeStyleBackgroundColor(`#60b347`);
			document.querySelector(`.number`).style.width = `30rem`;
			document.querySelector(`.number`).textContent = secretNumber;
			document.querySelector(`.check`).style.display = `none`;

			if (score > highscore) {
				highscore = score;
				document.querySelector(`.highscore`).textContent = highscore;
			}
		} else {
			dispayMessage(`😢 You lost the game!`);
			changeStyleBackgroundColor(`#bd4141`);
			document.querySelector(`.number`).style.width = `30rem`;
			document.querySelector(`.number`).textContent = secretNumber;
			document.querySelector(`.check`).style.display = `none`;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			dispayMessage(guess > secretNumber ? `🔼 Too high!` : `🔼 Too low!`);
			score--;
			document.querySelector(`.score`).textContent = score;
		} else {
			dispayMessage(`😢 You lost the game!`);
			changeStyleBackgroundColor(`#bd4141`);
			document.querySelector(`.number`).style.width = `30rem`;
			document.querySelector(`.number`).textContent = secretNumber;
			document.querySelector(`.check`).style.display = `none`;
			score = 0;
			document.querySelector(`.score`).textContent = score;
		}
	}
});

document.querySelector(`.again`).addEventListener(`click`, function () {
	dispayMessage(`Start guessing...`);
	changeStyleBackgroundColor(`#222`);
	document.querySelector(`.number`).textContent = `?`;
	document.querySelector(`.guess`).value = ``;
	document.querySelector(`.number`).style.width = `15rem`;
	document.querySelector(`.check`).style.display = `block`;
	score = 20;
	document.querySelector(`.score`).textContent = score;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
});
