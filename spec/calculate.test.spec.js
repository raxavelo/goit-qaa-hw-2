const calculateRectangleArea = require('../calculate');

describe('calculateRectangleArea', () => {
    it('calculates the area of the rectangle 5 x 4', () => {
        expect(calculateRectangleArea(5, 4)).toBe(20);
    });

    it('calculates the area of the rectangle 3 x 7', () => {
        expect(calculateRectangleArea(3, 7)).toBe(21);
    });

    it('calculates the area of the rectangle 10 x 10', () => {
        expect(calculateRectangleArea(10, 10)).toBe(100);
    });
})