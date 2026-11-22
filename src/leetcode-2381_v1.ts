/**
 * Problem 2381: Shifting Letters II
 *
 * Version: Naive
 *
 * Constraints:
 *   1. 1 <= str.length, shifts.length <= 5 * 10^4
 *   2. shifts[i].length == 3
 *   3. 0 <= start_i <= end_i < s.length
 *   4. 0 <= direction_i <= 1
 *   5. s consists of lowercase English letters.
 */

/**
 * Function: shiftingLetters
 * Algorithmic Paradigm: Naive
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(|str|^2); an upper bound
 *   - Space: O(|str|)
 */
function shiftingLetters(str: string, shifts: number[][]): string {
  const shiftStack: number[][] = shifts;
  const codePoints: number[] = Array.from(str, (char) => char.codePointAt(0)) as number[];

  while (shiftStack.length) {
    const shift: number[] = shiftStack.pop() as number[];

    const markerHead = shift[0];
    const markerTail = shift[1];
    const move = shift[2] == 1 ? 1 : -1;

    for (let i = markerHead; i <= markerTail; i++) {
      const baseCodePoint = codePoints[i] - 97;
      codePoints[i] = 97 + mod(baseCodePoint + move, 26);
    }
  }

  return String.fromCodePoint(...codePoints);

  // ================================================================================

  /** Computes floored modulo of `n` divided by `m`. */
  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }
}

export {};
