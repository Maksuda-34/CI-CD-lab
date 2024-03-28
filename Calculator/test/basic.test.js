
const calculator = require("../src/basic");

describe('Add', () =>{
    var BVAdata = [
        [1,2,3],
        [4,5,9],
        [3,12,15],
        [4,6,10]
    ]
    describe.each(BVAdata)('BVA: add(%i , %i), Expected: %i', (a, b, expected) => {
        test(`returns ${a} + ${b} = ${expected}`, () => {
            expect(calculator.add(a, b)).toEqual(expected);
        });
    });
    var DTdata = [
        [0,89,89],
        [-17,-35, -52],
        [65,-12,53],
        [-78,24,-54]
    ]
    describe.each(DTdata)('DT: add(%i , %i), Expected: %i', (a, b, expected) => {
        test(`returns ${a} + ${b} = ${expected}`, () => {
            expect(calculator.add(a, b)).toBe(expected);
        });
    });
    describe("Subtract", () => {
        test("a = 10, b = 3", () => {
          expect(calculator.substract(10, 3)).toBe(7);
        });
      });
      describe("Multiply", () => {
        test("a = 10, b = 3", () => {
          expect(calculator.multiply(10, 3)).toBe(30);
        });
      });
      describe("Divide", () => {
        test("a = 10, b = 2", () => {
          expect(calculator.divide(10, 2)).toBe(5);
        });
      });
})