import { strToZigZag } from './strToZigZag';

describe('strToZigZag', () => {
  it('can convert a string into a zig zag patterend string', () => {
    expect.assertions(4);
    expect(strToZigZag('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
    expect(strToZigZag('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
    expect(strToZigZag('ABC', 1)).toBe('ABC');
    expect(strToZigZag('ABC', 2)).toBe('ACB');
  });
});
