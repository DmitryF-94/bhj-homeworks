document.addEventListener('DOMContentLoaded', function() {
	let chatWidget = document.querySelector('.chat-widget');
	let messagesContainer = document.querySelector('.chat-widget__messages');
	let input = document.querySelector('.chat-widget__input');
	let robotResponses = [
		'Чего надо?',
		'Мы не обязаны вам отвечать.',
		'Читайте FAQ, там всё написано.',
		'Вы мешаете работать.',
		'Позвоните в другой раз.',
		'Нам неинтересно.',
		'Сами разбирайтесь.',
		'Это не наша проблема.',
		'Вы слишком много спрашиваете.',
		'У нас нет времени на глупости.'
	];
	chatWidget.addEventListener('click', function() {
		chatWidget.classList.add('chat-widget_active');
		setTimeout(() => input.focus(), 100);
	});
	input.addEventListener('keydown', function(e) {
		if (e.key === 'Enter') {
			let text = input.value.trim();
			if (text) {
				addMessage(text, 'message_client');
				input.value = '';
				setTimeout(() => {
					let response = robotResponses[Math.floor(Math.random() * robotResponses.length)];
					addMessage(response, '');
				}, 500 + Math.random() * 1000);
			}
		}
	});

	function addMessage(text, className) {
		let time = formatTime(new Date());
		let messageHTML = `
            <div class="message ${className}">
                <div class="message__time">${time}</div>
                <div class="message__text">${text}</div>
            </div>
        `;
		messagesContainer.innerHTML += messageHTML;
		messagesContainer.scrollTop = messagesContainer.scrollHeight;
	}

	function formatTime(date) {
		let hours = String(date.getHours()).padStart(2, '0');
		let minutes = String(date.getMinutes()).padStart(2, '0');
		return `${hours}:${minutes}`;
	}
});