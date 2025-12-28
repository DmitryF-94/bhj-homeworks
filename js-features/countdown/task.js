let timer = document.getElementById('timer');
let timerValue = parseInt(prompt("Введите количество секунд таймера:"));
timer.textContent = timerValue;
let countdown = setInterval(function() {
	if (timerValue > 0) {
		timerValue--;
		timer.textContent = timerValue;
	} else {
		clearInterval(countdown);
		alert("Вы победили в конкурсе!");
	}
}, 1000);