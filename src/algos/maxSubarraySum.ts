/**
 * Takes an array of integers, and a number, n. Finds the maximum sum of n
 * consecutive integers in the array.
 *
 * @param ints array of numbers.
 * @param subSize number of consecutive integers to sum.
 *
 * @returns maximum sum of n consecutive integers in the given array.
 */
export function maxSubarraySumBruteForce(
  ints: number[],
  n: number
): number | void {
  if (ints.length <= 0) {
    return;
  }

  let left = 0;
  let right = n - 1;
  let max = 0;
  while (right <= ints.length - 1) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += ints[i];
    }

    if (sum > max) {
      max = sum;
    }
    left++;
    right++;
  }

  return max;
}

/**
 * Takes an array of integers, and a number, n. Finds the maximum sum of n
 * consecutive integers in the array.
 *
 * @param ints array of numbers.
 * @param subSize number of consecutive integers to sum.
 *
 * @returns maximum sum of n consecutive integers in the given array.
 */
export function maxSubarraySum(ints: number[], n: number): number | void {
  if (ints.length < n) {
    return;
  }

  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += ints[i];
  }

  let tempSum = maxSum;
  for (let i = n; i < ints.length; i++) {
    tempSum = tempSum - ints[i - n] + ints[i];
    maxSum = maxSum > tempSum ? maxSum : tempSum;
  }

  return maxSum;
}
