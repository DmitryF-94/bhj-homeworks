document.addEventListener('DOMContentLoaded', () => {
	let dropdowns = document.querySelectorAll('.dropdown');

	dropdowns.forEach(dropdown => {
		let valueElem = dropdown.querySelector('.dropdown__value');
		let listElem = dropdown.querySelector('.dropdown__list');
		valueElem.addEventListener('click', () => {
			listElem.classList.toggle('dropdown__list_active');
		});
		let items = Array.from(dropdown.querySelectorAll('.dropdown__item'));
		items.forEach(item => {
			item.querySelector('.dropdown__link').addEventListener('click', (event) => {
				event.preventDefault();
				valueElem.textContent = item.querySelector('.dropdown__link').textContent;
				listElem.classList.remove('dropdown__list_active');
			});
		});
	});
});