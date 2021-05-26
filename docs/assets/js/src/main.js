import throttle from '/throttle';
import activate from 'activate';

const increment = function (e) {
	e.preventDefault();

	let el = e.target;
	let activateNum = parseInt(el.getAttribute('data-activate-count'));

	activateNum += 1;

	el.setAttribute('data-activate-count', activateNum);
};

activate('.js-throttle-fast', throttle(increment, 200));
activate('.js-throttle-slow', throttle(increment, 1000));
