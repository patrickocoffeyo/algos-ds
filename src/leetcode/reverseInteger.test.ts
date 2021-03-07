import { reverseInteger } from './reverseInteger';

describe('reverseInteger', () => {
  it('can reverse all digits within an integer', () => {
    //expect.assertions(4);
    expect(reverseInteger(123)).toBe(321);
    expect(reverseInteger(-123)).toBe(-321);
    expect(reverseInteger(120)).toBe(21);
    expect(reverseInteger(0)).toBe(0);
    expect(reverseInteger(-0)).toBe(-0);
    expect(reverseInteger(1534236469)).toBe(0);
    expect(reverseInteger(-2147483648)).toBe(0);
  });
});
