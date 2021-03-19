import { same } from './same';

describe('same', () => {
  it('can return true if every value in the first array has its corresponding value squared in the second array', () => {
    expect.assertions(2);
    expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
    expect(same([2, 5, 9], [81, 4, 25])).toBe(true);
  });

  it('returns false if every not value in the first array has a squared counterpart in the second array', () => {
    expect.assertions(2);
    expect(same([1, 2, 3], [1, 9])).toBe(false);
    expect(same([1, 2, 3], [4, 4, 1])).toBe(false);
  });
});
