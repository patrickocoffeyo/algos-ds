import { maxSubarraySumBruteForce, maxSubarraySum } from './maxSubarraySum';

describe('maxSubarraySumBruteForce', () => {
  it('finds the maximum sum of n consecutive integers in the given array', () => {
    expect.assertions(5);
    expect(maxSubarraySumBruteForce([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySumBruteForce([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySumBruteForce([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySumBruteForce([4, 2, 1, 6, 2], 4)).toBe(13);
    expect(maxSubarraySumBruteForce([], 4)).toBe(undefined);
  });
});

describe('maxSubarraySum', () => {
  it('finds the maximum sum of n consecutive integers in the given array', () => {
    expect.assertions(5);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
    expect(maxSubarraySum([], 4)).toBe(undefined);
  });
});
