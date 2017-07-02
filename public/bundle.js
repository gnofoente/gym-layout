/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__classes_json__);


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

	var modsCollection = __WEBPACK_IMPORTED_MODULE_0__classes_json___default.a.classes;

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



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"classes": [
		{
			"title": "Natação",
			"type": "aquatic",
			"description": "A prática da natação é considerada um dos melhores exercícios físicos existentes trazendo ótimos benefícios para o organismo e benefícios a saúde e é a única actividade física indicada para menores de 3 anos."
		},
		{
			"title": "Aeróbica",
			"type": "non-aquatic",
			"description": "Os exercícios aeróbicos usam grandes grupos musculares, rítmica e continuamente, elevando os batimentos cardíacos e a respiração durante algum tempo. O exercício aeróbico é longo em duração e moderada em intensidade."
		},
		{
			"title": "Dança",
			"type": "non-aquatic",
			"description": "Dançar pode auxiliar no tratamento de doenças como diabetes, síndrome do pânico, transtorno bipolar, depressão e até alguns tipos de câncer. A dança pode ser considerada um remédio que melhora a saúde física e mental."
		},
		{
			"title": "Hidroginástica",
			"type": "aquatic",
			"description": "A prática da hidroginástica pode levar a menor impacto nas articulações, menor esforço nos movimentos e sensação de conforto causada pela água. A hidroginástica é indicada como atividade anaeróbica, pura e simples, e também indicada para aqueles que dela realmente precisam incluindo os portadores de problemas de peso, os mais diversos."
		},
		{
			"title": "Corrida",
			"type": "non-aquatic",
			"description": "É um dos exercícios mais recomendados pelos médicos, seja para saúde como para perda de peso, além de proporcionar bem-estar físico e mental. Essa atividade é completa e envolve praticamente todos os músculos do corpo, aumentando o ganho de massa muscular e queima de calorias"
		},
		{
			"title": "Pilates",
			"type": "non-aquatic",
			"description": "O Pilates mistura um treino de força e flexibilidade que ajuda a melhorar a postura, alongar e tonificar os músculos sem exageros. Os exercícios focam na qualidade dos movimentos, ao invés da quantidade, deixando o praticante revigorado após a prática."
		}
	]
};

/***/ })
/******/ ]);