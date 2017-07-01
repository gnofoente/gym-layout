import modality from './modality.js';

modality.hello("dsadsa");

console.log(json);

var btn = document.querySelector('.menu-btn');
var menu = document.querySelector('.mobile-wrapper');

btn.addEventListener('click', function () {
	toggle(menu, 'mobile-wrapper--visible');
});

function toggle (element, className) {
	element.classList.toggle(className);
} 