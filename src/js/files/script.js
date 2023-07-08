// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

let headerBody = document.querySelector('.body-header__body');
let container = document.querySelector('[class*="__container"]');
let maxWidth = Number.parseInt(window.getComputedStyle(container).maxWidth) - 30;

let menuItems = headerBody.querySelectorAll('.menu__item');
let menuItemsRevers = Array.from(menuItems).reverse();
let menuItemsWidthReverse = Array.from(menuItems)
	.map((item) => item.offsetWidth)
	.reverse();

let accumulator = 30;
let offset = 50;
menuItemsRevers.forEach((elem, index) => {
	elem.dataset.da = `.more-menu__list, ${maxWidth - accumulator + offset}, last`;
	accumulator += menuItemsWidthReverse[index] + 20;
});

window.addEventListener('load', (e) => {
	console.log('loaded');

	let phoneInputs = document.querySelectorAll('._input-phone-mask');
	if (phoneInputs.length) {
		let maskOptions = {
			mask: '+7(000)000-00-00',
			lazy: false,
		};
		phoneInputs.forEach((input) => {
			let mask = new IMask(input, maskOptions);
		});
	}
});
