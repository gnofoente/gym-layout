import modalities from './classes.json';

var btn = document.querySelector('.menu-btn');
var menu = document.querySelector('.mobile-wrapper');
var output = document.querySelector('.modalities .container');

btn.onclick = function () {
	toggle(menu, 'mobile-wrapper--visible');
};

function toggle (element, className) {
	element.classList.toggle(className);
}

(function render () {
	var list = document.createElement('ul');
	list.classList.add('showcase', 'bxslider');

	var modsCollection = modalities.classes;

	modsCollection.forEach(function (mod) {
		console.log(mod);
		list.innerHTML += '<li class="modality">' + 
							'<h2 class="modality__name">' + mod.title + '</h3>' +
							'<p class="modality__description">' + mod.description + '</p>' +
							'<span id="modality__type">' + mod.type + '</span>' +
						  '</li>';
	});

	console.log(list);
	output.appendChild(list);
} ());

$(document).ready(function () {
	$('.bxslider').bxSlider({
		minSlides: 1,
		maxSlides: 4,
		slideWidth: 300,
		slideMargin: 20
	});
});

