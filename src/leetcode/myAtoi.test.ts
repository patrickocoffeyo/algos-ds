import { myAtoi } from './myAtoi';

describe('myAtoi', () => {
  it('converts a string to a 32-bit signed integer', () => {
    expect.assertions(11);
    expect(myAtoi('')).toBe(0);
    expect(myAtoi('  42')).toBe(42);
    expect(myAtoi('-42')).toBe(-42);
    expect(myAtoi('4193 with words')).toBe(4193);
    expect(myAtoi('words and 987')).toBe(0);
    expect(myAtoi('-91283472332')).toBe(-2147483648);
    expect(myAtoi('91283472332')).toBe(2147483647);
    expect(myAtoi('-+12')).toBe(0);
    expect(myAtoi('21474836460')).toBe(2147483647);
    expect(myAtoi('   +0 123')).toBe(0);
    expect(myAtoi('-5-')).toBe(-5);
  });
});
