 function checkVisibility() {
 	let reveals = document.querySelectorAll('.reveal');
 	let windowHeight = window.innerHeight;
 	reveals.forEach(reveal => {
 		let rect = reveal.getBoundingClientRect();
 		if (rect.top < windowHeight && rect.bottom > 0) {
 			reveal.classList.add('reveal_active');
 		} else {
 			reveal.classList.remove('reveal_active');
 		}
 	});
 }

 window.addEventListener('scroll', checkVisibility);