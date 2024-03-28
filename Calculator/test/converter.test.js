const { WeightConverter } = require('../src/converter');

describe('WeightConverter function', () => {
  it('should convert 4 ounces to pounds and tons', () => {
    const result = WeightConverter('ounces', 4);
    expect(result).toEqual(['0.25 pounds', '0.00 tons']);
  });

  it('should convert 5 pounds to ounces and tons', () => {
    const result = WeightConverter('pounds', 5);
    expect(result).toEqual(['80.00 ounces', '0.00 tons']);
  });

  it('should convert 2 tons to pounds and ounces', () => {
    const result = WeightConverter('tons', 2);
    expect(result).toEqual(['4000.00 pounds', '64000.00 ounces']);
  });

  it('should handle wrong input', () => {
    const result = WeightConverter('invalid', 10);
    expect(result).toBe('wrong input');
  });
});
