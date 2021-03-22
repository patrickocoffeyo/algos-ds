import { simpleBinarySearch } from './simpleBinarySearch';

describe('simpleBinarySearch', () => {
  it('finds a number within an array', () => {
    expect.assertions(3);
    const input = [1, 2, 13, 14, 15, 18, 19, 21, 25, 32];
    expect(simpleBinarySearch(input, 15)).toBe(4);
    expect(simpleBinarySearch(input, 21)).toBe(7);
    expect(simpleBinarySearch([], 4)).toBe(undefined);
  });
});
