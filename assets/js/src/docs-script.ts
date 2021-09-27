// import throttle from '@cipscis/throttle';
import throttle from '../../../../dist/throttle.js';

const increment = function (this: HTMLElement, e: MouseEvent) {
	e.preventDefault();

	let el = e.target as HTMLElement;
	const activateCountString = el.getAttribute('data-activate-count');

	let activateCount = activateCountString ? parseInt(activateCountString, 10) : 0;

	activateCount += 1;

	el.setAttribute('data-activate-count', activateCount.toString());
};

const throttledIncrementFast = throttle(increment, 200);
const throttledIncrementSlow = throttle(increment, 1000);

document.querySelectorAll<HTMLElement>('.js-throttle-fast').forEach(($el) => $el.addEventListener('click', throttledIncrementFast));
document.querySelectorAll<HTMLElement>('.js-throttle-slow').forEach(($el) => $el.addEventListener('click', throttledIncrementSlow));
