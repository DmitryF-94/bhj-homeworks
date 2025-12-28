let score = 0;
let misses = 0;
let winScore = 10;
let loseScore = 5;
let holes = document.querySelectorAll('.hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function resetGame() {
	score = 0;
	misses = 0;
	dead.textContent = score;
	lost.textContent = misses;
}

holes.forEach(hole => {
	hole.addEventListener('click', () => {
		if (hole.classList.contains('hole_has-mole')) {
			score++;
			dead.textContent = score;

			if (score === winScore) {
				alert('Вы выиграли!');
				resetGame();
			}
		} else {
			misses++;
			lost.textContent = misses;

			if (misses === loseScore) {
				alert('Вы проиграли!');
				resetGame();
			}
		}
	});
});