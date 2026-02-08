document.addEventListener('DOMContentLoaded', function() {
	let form = document.getElementById('form');
	let fileInput = document.getElementById('file');
	let progress = document.getElementById('progress');
	let sendButton = document.getElementById('send');
	let fileDesc = document.querySelector('.input__wrapper-desc');

	fileInput.addEventListener('change', function() {
		let file = fileInput.files[0];
		if (file) {
			fileDesc.textContent = file.name;
		} else {
			fileDesc.textContent = 'Имя файла...';
		}
	});

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		let file = fileInput.files[0];
		if (!file) {
			alert('Пожалуйста, выберите файл для загрузки.');
			return;
		}
		let xhr = new XMLHttpRequest();
		xhr.upload.addEventListener('progress', function(event) {
			if (event.lengthComputable) {
				let percent = event.loaded / event.total;
				progress.value = percent;
			}
		});
		xhr.addEventListener('load', function() {
			if (xhr.status === 200 || xhr.status === 201) {
				try {
					let response = JSON.parse(xhr.responseText);
					alert('Файл загружен успешно!');
				} catch (e) {
					alert('Файл загружен, но ответ сервера не JSON.');
				}
			} else {
				alert('Ошибка сервера: ' + xhr.status);
			}
			resetForm();
		});
		xhr.addEventListener('error', function() {
			alert('Произошла ошибка при загрузке файла.');
			resetForm();
		});
		xhr.addEventListener('loadend', function() {
			sendButton.disabled = false;
		});
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
		let formData = new FormData();
		formData.append('file', file);
		sendButton.disabled = true;
		xhr.send(formData);
	});

	function resetForm() {
		fileInput.value = '';
		fileDesc.textContent = 'Имя файла...';
		progress.value = 0;
	}
});