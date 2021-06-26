import { throttle } from '../throttle.js';

describe('throttle', () => {
	let spy;

	beforeEach(() => {
		spy = jasmine.createSpy();

		jasmine.clock().install();
	});

	afterEach(() => {
		spy = null;

		jasmine.clock().uninstall();
	});

	it(`returns a function`, () => {
		const throttledFn = throttle(spy, 100);

		expect(throttledFn).toBeInstanceOf(Function);
	});

	it(`executes the throttled function immediately`, () => {
		const throttledFn = throttle(spy, 100);

		throttledFn();

		expect(spy.calls.count()).toBe(1);
	});

	it(`does not execute the throttled function again within the specified delay`, () => {
		const delay = 100;
		const throttledFn = throttle(spy, delay);

		throttledFn();

		expect(spy.calls.count()).toBe(1);

		jasmine.clock().tick(delay-1);

		throttledFn();

		expect(spy.calls.count()).toBe(1);
	});

	it(`can execute the function again after the delay`, () => {
		const delay = 100;
		const throttledFn = throttle(spy, delay);

		throttledFn();

		expect(spy.calls.count()).toBe(1);

		jasmine.clock().tick(delay);

		throttledFn();

		expect(spy.calls.count()).toBe(2);
	});

	it(`passes through any arguments to the throttled function`, () => {
		const throttledFn = throttle(spy, 100);

		throttledFn(1, 2, 3, 4);

		jasmine.clock().tick(100);

		expect(spy.calls.argsFor(0)).toEqual([1, 2, 3, 4]);
	});

	it(`maintains the correct 'this' object`, () => {
		let withThis;

		const fn = function () {
			withThis = this;
		};
		const throttledFn = throttle(fn, 100);

		const obj = {};

		throttledFn.call(obj, 1, 2, 3, 4);

		jasmine.clock().tick(100);

		expect(withThis).toEqual(obj);
	});

	it(`doesn't override 'this' when used with arrow notation`, () => {
		let withThis;

		const obj = {
			fn: function () {
				withThis = this;
			},
			arrFn: () => {
				withThis = this;
			},
		};

		obj.throttledFn = throttle(obj.fn, 100);
		obj.throttledArrFn = throttle(obj.arrFn, 100);

		// 'this' should be set
		obj.throttledFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withThis).toEqual(obj);

		withThis = undefined;

		// arrFn used arrow notation, so its 'this' shouldn't be obj
		obj.throttledArrFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withThis).not.toEqual(obj);
	});

	// Use function instead of array notation so 'arguments' exists
	it(`doesn't override 'arguments' when used with arrow notation`, function ()  {
		let withArgs;

		const fn = function () {
			withArgs = Array.from(arguments);
		};
		const arrFn = () => {
			withArgs = Array.from(arguments);
		};

		const throttledFn = throttle(fn, 100);
		const throttledArrFn = throttle(arrFn, 100);

		// 'arguments' should be set
		throttledFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withArgs).toEqual([1, 2, 3, 4]);

		withArgs = undefined;

		// arrFn used arrow notation, so its 'arguments' shouldn't be set
		throttledArrFn(1, 2, 3, 4);
		jasmine.clock().tick(100);
		expect(withArgs).not.toEqual([1, 2, 3, 4]);
	});
});
