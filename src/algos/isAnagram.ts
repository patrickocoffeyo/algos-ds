/**
 * Returns true if the two given strings are anagrams.
 *
 * @param first string containing a possible anagram of the second string.
 * @param second string containing a possible anagram of the first string
 * @returns boolean indicating whether or not the two given strings are anagrams of each other.
 */
export function isAnagram(first: string, second: string): boolean {
  if (first.length !== second.length) {
    return false;
  }

  const complements = new Map<string, number>();
  for (const f of first) {
    complements.set(f, (complements.get(f) || 0) + 1);
  }

  for (const s of second) {
    const complement = complements.get(s);
    if (!complement || complement <= 0) {
      return false;
    }
    complements.set(s, complement - 1);
  }

  return true;
}
