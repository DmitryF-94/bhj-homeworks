document.addEventListener('DOMContentLoaded', function() {
	let mainCheckboxes = document.querySelectorAll('.interest__check');

	mainCheckboxes.forEach(mainCheckbox => {
		let hasSublist = mainCheckbox.closest('.interest')
			.querySelector('.interests.interests_active');

		if (hasSublist) {
			mainCheckbox.addEventListener('change', function() {
				let subCheckboxes = hasSublist.querySelectorAll('.interest__check');
				subCheckboxes.forEach(subCheckbox => {
					subCheckbox.checked = this.checked;
				});
			});
			let subCheckboxes = hasSublist.querySelectorAll('.interest__check');
			subCheckboxes.forEach(subCheckbox => {
				subCheckbox.addEventListener('change', function() {
					let allSubChecked = Array.from(subCheckboxes)
						.every(cb => cb.checked);
					mainCheckbox.checked = allSubChecked;
				});
			});
		}
	});
});