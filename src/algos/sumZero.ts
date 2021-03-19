/**
 * Finds the first pair of numbers that sum to zero within the given sorted array.
 *
 * @param nums sorted array of numbers.
 *
 * @returns tuple containing the two numbers within sortedNums that sum to zero, or void.
 */
export function sumZero(sortedNums: number[]): [number, number] | void {
  let i = 0;
  let j = sortedNums.length - 1;
  while (i < j) {
    const sum = sortedNums[i] + sortedNums[j];
    if (sum === 0) {
      return [sortedNums[i], sortedNums[j]];
    }

    if (sum < 0) {
      i++;
    } else {
      j--;
    }
  }

  return undefined;
}
