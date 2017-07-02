import modalities from './classes.json';

var btn = document.querySelector('.menu-btn');
var menu = document.querySelector('.mobile-wrapper');
var output = document.querySelector('.modalities .container');
var filter = document.querySelectorAll('.filter input[type=checkbox]');

btn.onclick = function () {
	toggle(menu, 'mobile-wrapper--visible');
};

filter.forEach(function (value) {
	value.addEventListener('click', function () {
		if (this.value == 'acqua' && this.checked) {
			var other = document.querySelector('.filter input[value=non-acqua]');
			other.disabled = true;
			render('acqua');
		} else if (this.value == 'non-acqua' && this.checked) {
			var other = document.querySelector('.filter input[value=acqua]');
			other.disabled = true;
			render('non-acqua');
		} else {
			filter[0].disabled = false;
			filter[1].disabled = false;
			render();
		}
	});
})


function toggle (element, className) {
	element.classList.toggle(className);
}

function hasShowcase () {
	if (document.querySelector('li.modality')) {
		return true;
	}

	return false;
}

function render (filter) {
	if (hasShowcase()) {
		var showcase = document.querySelector('.bx-wrapper') || document.querySelector('ul.showcase');
		showcase.remove();
	}

	var list = document.createElement('ul');
	list.classList.add('showcase', 'bxslider');

	var modsCollection = modalities.classes;

	if (filter == 'acqua') {
		modsCollection = modsCollection.filter(function (mod) {
			if (mod.type == 'aquatic') {
				return true;
			}
		});
	}

	if (filter == 'non-acqua') {
		modsCollection = modsCollection.filter(function (mod) {
			if (mod.type == 'non-aquatic') {
				return true;
			}
		});
	}

	modsCollection.forEach(function (mod) {
		console.log(mod);
		list.innerHTML += '<li class="modality">' + 
							'<h2 class="modality__name">' + mod.title + '</h3>' +
							'<p class="modality__description">' + mod.description + '</p>' +
							'<span id="modality__type">' + mod.type + '</span>' +
						  '</li>';
	});

	console.log(modsCollection.length);
	output.appendChild(list);

	var bannerOptions = {
		controls: true,
		minSlides: 1,
		maxSlides: 8,
		slideWidth: 320,
		slideMargin: 20,
		nextText:'>',
		prevText:'<'
	}

	if ($(document).width() < 650) {
		$('.bxslider').bxSlider(bannerOptions);
	} else if ($(document).width() < 1300 && modsCollection.length >= 4) {
		$('.bxslider').bxSlider(bannerOptions);
	} else if ($(document).width() > 1300 && modsCollection.length > 4) {
		$('.bxslider').bxSlider(bannerOptions);
	}
};

$(document).ready(function () {
	render();
});

