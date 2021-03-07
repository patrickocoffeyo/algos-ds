/**
 * Implements the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * @param s string containing a potential number that will be converted into a 32-bit signed int.
 */
// @TODO: Clean this up, it is a total mess.
export function myAtoi(s: string): number {
  if (s.length < 1) return 0;

  let nums = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (nums.length > 0) {
        break;
      } else {
        continue;
      }
    }

    if (s[i] === '-' || s[i] === '+') {
      if (nums.length < 1) {
        nums += s[i];
        continue;
      } else {
        break;
      }
    }

    if (Number.isNaN(Number(s[i]))) {
      break;
    }

    nums += s[i];
  }

  const result = Number(nums);

  if (Number.isNaN(result)) {
    return 0;
  }

  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  if (result < min) {
    return min;
  }
  if (result > max) {
    return max;
  }

  return result;
}
