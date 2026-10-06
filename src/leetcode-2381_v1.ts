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

// TODO: Finish solution.
// NOTE: There's an approach with an interval tree data structure.

/**
 * Function: shiftLetters
 * Algorithmic Paradigm: Naive
 * Programming Paradigm: Imperative
 * Complexity:
 *   - Time: ???
 *   - Space: ???
 */
function shiftingLetters(str: string, shifts: number[][]): string {
  const shiftedLetters: string[] = [];
  shifts.forEach((shift) => {
    const charIndex = shift[0];
    const shiftTail = shift[1];
    const direction = shift[2];
    for (let i = charIndex; i <= shiftTail; i++) {
      let char = str[charIndex];
      char = shiftLetter(char, direction);
    }
  });

  return shiftedLetters.join('');

  // =================================================================

  function shiftLetter(char: string, direction: number): string {
    return char;
  }
}
