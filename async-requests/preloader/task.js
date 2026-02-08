document.addEventListener('DOMContentLoaded', () => {
	let loader = document.getElementById('loader');
	let itemsContainer = document.getElementById('items');

	function loadCurrencyRates() {
		fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
			.then(response => response.json())
			.then(data => {
				let valute = data.response.Valute;
				for (let key in valute) {
					let currency = valute[key];
					let itemCode = document.createElement('strong');
					itemCode.className = 'item__code';
					itemCode.textContent = currency.CharCode;

					let itemValue = document.createElement('span');
					itemValue.className = 'item__value';
					itemValue.textContent = currency.Value + " руб.";
					let lineBreak = document.createElement('br');
					itemsContainer.appendChild(itemCode);
					itemsContainer.appendChild(itemValue);
					itemsContainer.appendChild(lineBreak);
				}
			})
			.catch(error => console.error('Ошибка:', error))
			.finally(() => {
				loader.classList.remove('loader_active');
			});
	}
	loadCurrencyRates();
});