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
		clearInterval(interval);
		startinterval();
		const index = e.target.getAttribute('data-glider-index');

		thumbsGlider.scrollItem(index, true);
	});
});
var interval
function startinterval(){
	i = 0;
interval = window.setInterval(function(){
	i = i + 1;
	if(i==9)i=0;
    thumbsGlider.scrollItem(i, true);
}, 4000);
}
startinterval();