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
let offset = 160;
menuItemsRevers.forEach((elem, index) => {
	elem.dataset.da = `.more-menu__list, ${maxWidth - accumulator + offset}, first`;
	accumulator += menuItemsWidthReverse[index] + 20;
});

let dataJson = {
	config: {
		user_sklad_price: [
			{ bol: 0, men: 3, sum: 500 },
			{ bol: 4, men: 10, sum: 350 },
			{ bol: 11, men: 20, sum: 250 },
			{ bol: 21, men: 50, sum: 150 },
			{ bol: 51, men: 100, sum: 100 },
			{ bol: 101, men: 300, sum: 66 },
			{ bol: 301, men: 600, sum: 50 },
			{ bol: 601, men: 1000, sum: 45 },
		],
		market_price: [
			{ bol: 0, men: 0, sum: 0 },
			{ bol: 1, men: 100, sum: 50 },
			{ bol: 101, men: 500, sum: 25 },
			{ bol: 501, men: 1000, sum: 20 },
			{ bol: 1001, men: 3000, sum: 14 },
			{ bol: 3001, men: 5000, sum: 10 },
			{ bol: 5001, men: 10000, sum: 7 },
			{ bol: 10001, men: 20000, sum: 6 },
			{ bol: 20001, men: 100000, sum: 2 },
		],
	},
};

renderJson(dataJson);
ratesDynamicAdaptive();

window.addEventListener('resize', (e) => {
	setTimeout(moreMenyHeaderCheck, 10);

	if (document.querySelector('html').classList.contains('menu-open') && e.target.outerWidth > 767.98) {
		document.querySelector('.menu__icon').click();
	}
});

sessionCookiesStart();

async function sessionCookiesStart() {
	let response = await fetch('session.php');
	if (response.ok) {
		let responseJson = await response.json();

		if (responseJson.cookies === true) {
			document.querySelector('.cookie-agreement').classList.add('_accepted');
		}
	} else {
		throw new Error('connection denied');
	}
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
			let formInput = input.closest('form').addEventListener('reset', (e) => {
				mask.destroy();
			});
		});
	}

	moreMenyHeaderCheck();

	let passEyeButtons = document.querySelectorAll('[class*="-viewpass"]');
	if (passEyeButtons) {
		passEyeButtons.forEach((button) => {
			button.closest('form').classList.add('_pass-hidden');
		});
	}

	document.addEventListener('click', (el) => {
		const targetElement = el.target;

		if (targetElement.closest('.cookie-agreement__button')) {
			e.preventDefault();

			document.querySelector('.cookie-agreement').classList.add('_accepted');
		}

		if (targetElement.closest('.cookie-agreement__button')) {
			el.preventDefault();

			try {
				sessionCookiesAccept();
			} catch (e) {
				console.log(e.message);
			}
		}

		if (targetElement.closest('[class*="-viewpass"]')) {
			let buttonEye = targetElement.closest('[class*="-viewpass"]');

			if (targetElement.closest('form').classList.contains('_pass-hidden')) {
				buttonEye.classList.remove('_icon-eye');
				buttonEye.classList.add('_icon-eye-2');
			} else {
				buttonEye.classList.remove('_icon-eye-2');
				buttonEye.classList.add('_icon-eye');
			}

			targetElement.closest('form').classList.toggle('_pass-hidden');
		}

		async function sessionCookiesAccept() {
			let response = await fetch('session_accept.php');
			if (response.ok) {
				return await response.json();
			} else {
				throw new Error('connection denied');
			}
		}
	});
});

/**
 * Скрытие/показ элемента more-menu в зависимости от наличия элементов в нём
 */
function moreMenyHeaderCheck() {
	let moreMenuItem = document.querySelector('.body-header__more-menu');
	let moreMenuItems = moreMenuItem.querySelector('.more-menu__list').children;

	if (moreMenuItems.length) {
		moreMenuItem.classList.add('_show');
	} else {
		moreMenuItem.classList.remove('_show');
	}
}

/**
 * Перемещение кнопки тарифов в тело спойлера с помощью модуля dynamic adaptive
 */
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

/**
 * Рендер блоков с информацией о тарифах на странице с тарифами
 *
 * @param {object} json Объект с данными о тарифах
 */
function renderJson(json) {
	let jsonConfig = json.config;

	renderElem(
		jsonConfig.user_sklad_price,
		'Подключение к системе',
		'Интегрируйте систему учета, чтобы упростить работу сотрудников и сразу выйти на высокий уровень продажна новой площадке.'
	);
	renderElem(
		jsonConfig.market_price,
		'Подключение к Marketplace',
		'Интегрируйте систему учета, чтобы упростить работу сотрудников и сразу выйти на высокий уровень продажна новой площадке.'
	);
}

/**
 *
 * @param {Array} data Массив данных о тарифах
 * @param {String} title Заголовок выводимого блока с тарифами
 * @param {String} text Текст выводимого блока с тарифами
 */
function renderElem(data, title, text) {
	let elementBody = document.querySelector('[data-fetch]');

	if (!elementBody) {
		return null;
	}

	let buildedTemplateHTML = buildTemplateElem(data, title, text);
	elementBody.insertAdjacentHTML('beforeend', buildedTemplateHTML);
}

/**
 * Генерация шаблона блока с тарифами
 *
 * @param {Array} data Массив данных о тарифах
 * @param {String} title Заголовок выводимого блока с тарифами
 * @param {String} text Текст выводимого блока с тарифами
 * @returns {String} Сгенерированный шаблон блока с тарифами
 */
function buildTemplateElem(data, title, text) {
	let rowsHTML = [];
	data.forEach((item) => {
		let fixedPrice = fixPrice(item.sum * item.men);

		rowsHTML.push(`
		<div data-spollers="659.98" class="rate-item__spollers spollers">
			<details class="rate-item__details spollers__item">
				<summary class="rate-item__spollers-summary spollers__title">
					<div class="rate-item__content-line rate-item__line">
						<div class="rate-item__content-text text-font">
							От ${item.bol} до ${item.men}
						</div>
						<div class="rate-item__content-text text-font">
							${item.sum} ₽
						</div>
						<div
							class="rate-item__content-text rate-item__content-text_bold text-font">
							${fixedPrice} ₽
						</div>
						<div
							class="rate-item__content-text text-font rate-item__button">
							<a
								class="rate-item__button-inner rate-item__content-text_bold rate-item__content-text_red"
								href="#"
								>Подключить</a
							>
						</div>
					</div>
				</summary>
				<div class="rate-item__spollers-body spollers__body"></div>
			</details>
		</div>
		`);
	});

	let dataHTML = `<div class="rates__column">
							<div class="rate-item">
								<div class="rate-item__top">
									<div class="rate-item__top-title">${title}</div>
									<div class="rate-item__top-text text-font">
										${text}
									</div>
								</div>
								<div class="rate-item__body">
									<div class="rate-item__body-header rate-item__line">
										<div class="rate-item__header-title">Пользователи:</div>
										<div class="rate-item__header-title">Цена за аккаунт:</div>
										<div class="rate-item__header-title">Полная цена:</div>
										<div class="rate-item__header-title"></div>
									</div>
									<div class="rate-item__content">
										${rowsHTML.join('')}
									</div>
								</div>
							</div>
						</div>
	`;

	return dataHTML;
}

/**
 * Корректирует формат вывода полной стоимости тарифа (расставляет проблемы каждые 3 знака)
 *
 * @param {string} price - цена тарифа
 * @returns
 */
function fixPrice(price) {
	let result = '';

	let priceStr = reverseString(String(price));
	for (let i = 0; i < priceStr.length; i++) {
		if (i % 3 === 0) {
			result += ` ${priceStr[i]}`;
		} else {
			result += `${priceStr[i]}`;
		}
	}

	result = reverseString(result);

	return result;
}

/**
 * Переворачивает строку
 *
 * @param {String} str Исходная строка
 * @returns {String} Перевернутая строка
 */
function reverseString(str) {
	return str.split('').reverse().join('');
}
