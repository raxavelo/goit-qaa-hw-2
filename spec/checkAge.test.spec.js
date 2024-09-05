const isAdult = require('../checkAge');

describe('checkAge', () => {
    it('returns true for age 20', () => {
        expect(isAdult(20)).toBe(true);
    });

    it('returns false for age 16', () => {
        expect(isAdult(16)).toBe(false);
    });

    it('returns false for age 18', () => {
        expect(isAdult(18)).toBe(true);
    });
})