/** @param {string} str1 @param {string} str2 @param {number} minMatches  */
export const compareStrings = (str1, str2, minMatches) => {
  let count = 0;
  str1.split('').forEach((c, i) => (count += c === str2[i]));
  return count >= minMatches;
};
