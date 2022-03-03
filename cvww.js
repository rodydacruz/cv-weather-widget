const $thumbs = document.querySelectorAll("[data-glider-index]");

const thumbsGlider = new Glider(document.querySelector('.glider'), {
	slidesToShow: 1,
	dots: '#dots',
	draggable: true,
	arrows: {
		prev: '.glider-prev',
		next: '.glider-next'
	},
	scrollLock: true,
});


$thumbs.forEach(btn => {
	btn.addEventListener('click', e => {
		const index = e.target.getAttribute('data-glider-index');

		thumbsGlider.scrollItem(index, true);
	});
});