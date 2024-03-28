const { pow, modulo } = require("../src/advanced")

describe('pow', () => {
    const bvaData = [ [ 1, 2, 1 ], [ 4, 5, 1024 ], [ 3, 12, 531441 ], [ 4, 6, 4096 ] ]
    describe.each(bvaData)("BVA: pow(%i %i), Expected: %i", (a, b, expected) => {
        test(`returns ${pow(a, b)}`, () => {
            expect(pow(a, b)).toBe(expected)
        })
    })
    const dtData = [
        [ 0, 89, 0 ],
        [ -17, -35, -8.595828691938621e-44 ],
        [ 65, -12, 1.758084399840934e-22 ],
        [ -78, 24, 2.5719970407685146e+45 ]
      ]
      describe.each(dtData)("DT: pow(%i %i), Expected: %i", (a, b, expected) => {
        test(`returns ${pow(a, b)}`, () => {
            expect(pow(a, b)).toBe(expected)
        })
    })
})

describe('modulo', () => {
    const bvaData = [ [ 1, 2, 1 ], [ 4, 5, 4 ], [ 3, 12, 3 ], [ 4, 6, 4 ] ]
    describe.each(bvaData)("BVA: modulo(%i %i), Expected: %i", (a, b, expected) => {
        test(`returns ${modulo(a, b)}`, () => {
            expect(modulo(a, b)).toBe(expected)
        })
    })
    const dtData = [ [ 0, 89, 0 ], [ -17, -35, -17 ], [ 65, -12, 5 ], [ -78, 24, -6 ] ]
      describe.each(dtData)("DT: modulo(%i %i), Expected: %i", (a, b, expected) => {
        test(`returns ${modulo(a, b)}`, () => {
            expect(modulo(a, b)).toBe(expected)
        })
    })
})
