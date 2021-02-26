/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */
export function lengthOfLongestSubstring(s: string): number {
  const characters = s.split('');
  const substring = new Map<string, number>();
  let max = 0;

  for (let i = 0; i < characters.length; i++) {
    if (substring.has(characters[i])) {
      i = substring.get(characters[i]) as number;
      substring.clear();
    } else {
      substring.set(characters[i], i);
      max = max < substring.size ? substring.size : max;
    }
  }

  return max;
}

/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */
export function lengthOfLongestSubstringUsingObj(s: string): number {
  const characters = s.split('');
  let substring: {
    [key: string]: number;
  } = {};
  let max = 0;

  for (let i = 0; i < characters.length; i++) {
    if (substring[characters[i]]) {
      i = substring[characters[i]];
      substring = {};
    } else {
      substring[characters[i]] = i;
      const size = Object.keys(substring).length;
      max = max < size ? size : max;
    }
  }

  return max;
}
