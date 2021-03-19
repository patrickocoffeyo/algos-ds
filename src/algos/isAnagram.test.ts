import { isAnagram } from './isAnagram';

describe('isAnagram', () => {
  it('returns true if the given strings are anagrams', () => {
    expect.assertions(3);
    expect(isAnagram('azza', 'zaza')).toBe(true);
    expect(isAnagram('rat', 'tar')).toBe(true);
    expect(isAnagram('aaabbbcccdddeeefffggg', 'gggfffeeedddcccbbbaaa')).toBe(
      true
    );
  });

  it('returns false if the given strings are not anagrams', () => {
    expect.assertions(3);
    expect(isAnagram('aza', 'zaza')).toBe(false);
    expect(isAnagram('rat', 'tur')).toBe(false);
    expect(isAnagram('aaabbbcccdddeeefffgg', 'gggfffeeedddcccbbbaaa')).toBe(
      false
    );
  });
});
