/**
 * Problem 2381: Shifting Letters II
 *
 * Version: Optimized
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
 * Algorithmic Paradigm: Prefix Sum Array
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: O(|str| + |shifts|).
 *   - Space: O(|str|).
 */
function shiftingLetters(str: string, shifts: number[][]): string {
  const moveMarkers: number[] = new Array(str.length).fill(0);
  let runningMove = 0;

  // Load moves into `moveMarkers` (difference array)
  shifts.forEach((shift) => {
    const markerHead = shift[0];
    const markerTail = shift[1] + 1;
    const move = shift[2] == 1 ? 1 : -1;

    moveMarkers[markerHead] += move;
    if (markerTail < moveMarkers.length) moveMarkers[markerTail] += -move;
  });

  return String.fromCodePoint(
    // Translate moveMarkers into codePoints; we skip creating the prefix sum array of
    // moves separately.
    ...moveMarkers.map((move, i) => {
      runningMove += move;

      const baseCodePoint = (str.codePointAt(i) as number) - 97;

      return 97 + mod(baseCodePoint + runningMove, 26);
    }),
  );

  // ================================================================================

  /** Computes floored modulo of `n` divided by `m`. */
  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }
}
