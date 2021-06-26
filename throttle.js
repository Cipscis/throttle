const throttle = function (fn, delay) {
	// Create a version of fn that will execute only if it
	// hasn't been called successfully within the last delay ms

	let timeout;

	return function () {
		if (!timeout) {
			fn.apply(this, arguments);

			timeout = setTimeout(() => {
				timeout = undefined;
			}, delay);
		}
	};
};

export { throttle };
export default throttle;
