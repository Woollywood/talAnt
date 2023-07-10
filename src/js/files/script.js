// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';

// Подключение списка активных модулей
import { flsModules } from './modules.js';

// Переполнение меню хэдера
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


// Перемещение кнопки тарифов в тело спойлера
ratesDynamicAdaptive();

function ratesDynamicAdaptive() {
	let columns = document.querySelectorAll('.rates__column');

	if (columns.length === 0) {
		return null;
	}

	columns.forEach((columnItem, colIindex) => {
		columnItem.dataset.rateColumn = colIindex;

		let rowItems = columnItem.querySelectorAll('.rate-item__spollers');
		rowItems.forEach((rowItem, rowIndex) => {
			rowItem.querySelector('.rate-item__spollers-body').dataset.rateRow = rowIndex;

			rowItem.querySelector(
				'.rate-item__button'
			).dataset.da = `[data-rate-column="${colIindex}"] [data-rate-row="${rowIndex}"], 659.98`;
		});
	});
}

window.addEventListener('load', (e) => {
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

	document.addEventListener('click', (el) => {
		const targetElement = el.target;

		if (targetElement.closest('.cookie-agreement__button')) {
			e.preventDefault();

			document.querySelector('.cookie-agreement').classList.add('_accepted');
		}
	});
});
