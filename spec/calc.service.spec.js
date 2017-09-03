let calcService;

describe('Calculator Service', () => {
	beforeEach(() => {
		calcService = require('./../src/calculator.service');
	});

	it('should be able to add two numbers', () => {
		const expectedResult = 3;
		const result = calcService.add(1,2);
		expect(result).toBe(expectedResult);
	});

	it('should be able to subtract two numbers', () => {
		let expectedResult = 3;
		let result = calcService.subtract(4,1);
		expect(result).toBe(expectedResult);

		expectedResult = 1;
		result = calcService.subtract(0, -1);
		expect(result).toBe(expectedResult);
	});
});