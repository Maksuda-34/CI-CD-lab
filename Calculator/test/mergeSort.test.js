const { mergeSort } = require('../src/mergeSort');

describe('mergeSort function', () => {
  it('should correctly sort an array of numbers', () => {
    const inputArray = [3, 5, 8, 5, 99, 1];
    const expectedSortedArray = [1, 3, 5, 5, 8, 99];

    const sortedArray = mergeSort(inputArray);

    expect(sortedArray).toEqual(expectedSortedArray);
  });

  it('should return an empty array if the input array is empty', () => {
    const inputArray = [];
    const sortedArray = mergeSort(inputArray);
    
    expect(sortedArray).toEqual([]);
  });

  it('should return the input array if it contains only one element', () => {
    const inputArray = [42];
    const sortedArray = mergeSort(inputArray);
    
    expect(sortedArray).toEqual([42]);
  });

  it('should correctly sort an array with duplicate numbers', () => {
    const inputArray = [5, 3, 2, 5, 1, 2, 3];
    const expectedSortedArray = [1, 2, 2, 3, 3, 5, 5];

    const sortedArray = mergeSort(inputArray);

    expect(sortedArray).toEqual(expectedSortedArray);
  });
});