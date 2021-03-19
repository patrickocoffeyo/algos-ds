import { sumZero } from './sumZero';

describe('sumZero', () => {
  it('can identify two numbers within the given sorted number array that sum to zero', () => {
    expect.assertions(1);
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  });

  it('returns void if no number pairs sum to zero', () => {
    expect.assertions(2);
    expect(sumZero([-2, 0, 1, 3])).toBe(undefined);
    expect(sumZero([1, 2, 3])).toBe(undefined);
  });
});
