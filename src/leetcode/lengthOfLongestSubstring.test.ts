import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringUsingObj,
} from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  describe('using maps', () => {
    it('can find and return the longest substring', () => {
      expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
      expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    });
  });
  describe('using objs', () => {
    it('can find and return the longest substring', () => {
      expect(lengthOfLongestSubstringUsingObj('pwwkew')).toBe(3);
      expect(lengthOfLongestSubstringUsingObj('dvdf')).toBe(3);
    });
  });
});
