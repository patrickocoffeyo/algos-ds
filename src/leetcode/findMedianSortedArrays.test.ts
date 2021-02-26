import { findMedianSortedArrays } from './findMedianSortedArrays';

describe('findMedianSortedArrays', () => {
  it('can return the median of the two given sorted arrays', () => {
    expect.assertions(5);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
    expect(findMedianSortedArrays([], [1])).toBe(1);
    expect(findMedianSortedArrays([2], [])).toBe(2);
  });
  it('can handle negative numbers', () => {
    expect.assertions(1);
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
  });
});
