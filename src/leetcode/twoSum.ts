/**
 * Brute-force method of finding two numbers that sum to the target. Every single
 * item is checked against every single other item to find the earliest match.
 */
export function twoSum(nums: number[], target: number): number[] | void {
  for (const [indexOne, numOne] of nums.entries()) {
    for (const [indexTwo, numTwo] of nums.entries()) {
      if (numOne + numTwo === target && indexOne != indexTwo) {
        return [indexOne, indexTwo];
      }
    }
  }

  return undefined;
}

/**
 * Uses a map to store complements for each number.
 */
export function twoSumHashed(nums: number[], target: number): number[] | void {
  const complements = new Map<number, number>();

  for (const [index, value] of nums.entries()) {
    const maybeComplement = complements.get(target - value);
    if (typeof maybeComplement != 'undefined') {
      return [maybeComplement, index];
    }

    complements.set(value, index);
  }

  return undefined;
}
