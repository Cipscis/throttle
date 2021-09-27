/**
 * Create a version of fn that will only execute if it
 * hasn't been called successfully within the last delay ms
 *
 * @param {Function} fn - A function to throttle
 * @param {number} delay - The duration to wait before the function can be called again (ms)
 */
const throttle = function<T extends (...args: any) => any> (fn: T, delay: number) {
	// Use ReturnType<typeof setTimeout> for support across ES and NodeJS environments
	let timeout: ReturnType<typeof setTimeout> | undefined;

	return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> | undefined {
		if (!timeout) {
			const returnVal = fn.apply(this, args);

			timeout = setTimeout(() => {
				timeout = undefined;
			}, delay);

			return returnVal;
		}
	};
};

export { throttle };
export default throttle;
