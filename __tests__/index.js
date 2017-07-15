const sum = require('../index.js')

describe('sum module test', () => {
	it('should be 3 when passed 1 and 2', () => {
		expect(sum(1,2)).toBe(3)
	})
})
