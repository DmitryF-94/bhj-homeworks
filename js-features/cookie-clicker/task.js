let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let isCookieIncreased = true;

cookie.addEventListener('click', function() {
	counter.textContent = parseInt(counter.textContent) + 1;
	if (isCookieIncreased) {
		cookie.width = '180';
	} else {
		cookie.width = '200';
	}
	isCookieIncreased = !isCookieIncreased;

})