import throttle from '/throttle.js';

const increment = function (e) {
	e.preventDefault();

	let el = e.target;
	let activateNum = parseInt(el.getAttribute('data-activate-count'));

	activateNum += 1;

	el.setAttribute('data-activate-count', activateNum);
};

document.querySelectorAll('.js-throttle-fast').forEach(($el) => $el.addEventListener('click', throttle(increment, 200)));
document.querySelectorAll('.js-throttle-slow').forEach(($el) => $el.addEventListener('click', throttle(increment, 1000)));
