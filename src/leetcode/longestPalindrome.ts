export function longestPalindrome(s: string): string {
  if (s.length < 1) {
    return s;
  }

  let longest = '';
  for (let i = 0; i < s.length; i++) {
    const odd = expandAroundCenter(s, i, i);
    const even = expandAroundCenter(s, i - 1, i);

    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
}

function expandAroundCenter(str: string, left: number, right: number): string {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + i]) {
    i++;
  }
  i--;

  return str.slice(left - i, right + i + 1);
}
