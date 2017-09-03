let speaker = require('./../src/speaker.service.js');

describe('Speaker Service', () => {
	it('should say nice things', () => {
		let expectedResult = 'Hello, Jake';
		let result = speaker.greet('Jake');
		//expect(speaker.greet('Jake')).toBe('Hello, Jake');
		expect(result).toBe(expectedResult);
	})
});