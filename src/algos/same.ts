/**
 * Returns true if every value within array one has it's corresponding value
 * squared in array two. Otherwise, returns false.
 *
 * @param one array of values who's squared values should be within array two.
 * @param two array of values that should be squared counterparts of array one's values.
 * @returns boolean indicating whether or not the second array contains complementing
 *          squared values for all of array one's values.
 */
export function same(one: number[], two: number[]): boolean {
  if (one.length !== two.length) {
    return false;
  }

  const complements = new Map<number, number>();
  for (const i of two) {
    complements.set(i, (complements.get(i) || 0) + 1);
  }

  for (const i of one) {
    const squared = i ** 2;
    const n = complements.get(squared);

    if (!n || n <= 0) {
      return false;
    }

    complements.set(squared, n - 1);
  }

  return true;
}
