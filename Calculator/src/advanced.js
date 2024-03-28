// Importing the functions directly from the file
const { pow, modulo, selectionSort, insertionSort } = require("../src/advanced");

describe('Pow', () => {
    test('returns correct result for positive exponent', () => {
        expect(pow(2, 3)).toBe(8);
    });

    test('returns correct result for zero exponent', () => {
        expect(pow(5, 0)).toBe(1);
    });

    test('returns correct result for negative exponent', () => {
        expect(pow(2, -3)).toBeCloseTo(0.125); // 2^-3 = 1 / 2^3 = 1 / 8 = 0.125
    });
});

describe('Modulo', () => {
    test('returns correct result for positive numbers', () => {
        expect(modulo(5, 2)).toBe(1);
    });

    test('returns correct result for negative numbers', () => {
        expect(modulo(-17, -35)).toBe(-17);
    });

    test('returns correct result for negative dividend', () => {
        expect(modulo(-10, 3)).toBe(-1); // -10 % 3 = -1
    });

    test('returns correct result for zero divisor', () => {
        expect(() => modulo(10, 0)).toThrow('Division by zero'); // Division by zero should throw an error
    });
    
});
    


describe('Selection Sort', () => {
    test('sorts an array in ascending order', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
        const sortedArray = [1, 1, 2, 3, 4, 5, 5, 6, 9];
        expect(selectionSort(inputArray)).toEqual(sortedArray);
    });

    test('returns an empty array if input array is empty', () => {
        const inputArray = [];
        const sortedArray = [];
        expect(selectionSort(inputArray)).toEqual(sortedArray);
    });
});

describe('Insertion Sort', () => {
    test('sorts an array in ascending order', () => {
        const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
        const sortedArray = [1, 1, 2, 3, 4, 5, 5, 6, 9];
        expect(insertionSort(inputArray)).toEqual(sortedArray);
    });

    test('returns an empty array if input array is empty', () => {
        const inputArray = [];
        const sortedArray = [];
        expect(insertionSort(inputArray)).toEqual(sortedArray);
    });
});

module.exports = {
    pow,
    modulo,
    selectionSort,
    insertionSort
};

