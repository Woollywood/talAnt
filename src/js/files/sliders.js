/*
Документация по работе с шаблоном:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper

*/
// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';

/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Создание оболочки для блоков со слайдерами
// Оболочка обязательно должна включать в себя название класса с элементом "__swiper"
// Только тогда будет грамотно сгенерировано название классов для работы swiper
function buildSliders() {
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach((slider) => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Инициализация слайдеров
function initSliders() {
	// Список слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.slider-proccesses')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-proccesses', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			spaceBetween: 16,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-proccesses .arrow-prev',
				nextEl: '.slider-proccesses .arrow-next',
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
			// События
			on: {},
		});
	}

	if (document.querySelector('.slider-in-touch')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-in-touch', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			spaceBetween: 16,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-in-touch .arrow-prev',
				nextEl: '.slider-in-touch .arrow-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 6,
				},
			},
			// События
			on: {},
		});
	}

	if (document.querySelector('.slider-ourselves')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-ourselves', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			spaceBetween: 16,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-ourselves .arrow-prev',
				nextEl: '.slider-ourselves .arrow-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				768.98: {
					slidesPerView: 4,
				},
			},
			// События
			on: {},
		});
	}

	if (document.querySelector('.slider-outview')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-outview', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			spaceBetween: 16,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-outview .arrow-prev',
				nextEl: '.slider-outview .arrow-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1300: {
					slidesPerView: 3,
				},
			},
			// События
			on: {},
		});
	}

	if (document.querySelector('.experience__slider')) {
		// Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.experience__slider', {
			// Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// autoHeight: true,
			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			// lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Полоса прокрутки
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.experience__slider .arrow-prev',
				nextEl: '.experience__slider .arrow-next',
			},
			// События
			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Генерируем оболочку для слайдеров
	buildSliders();
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролл на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
