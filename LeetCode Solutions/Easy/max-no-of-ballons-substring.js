/* Problem - https://leetcode.com/problems/maximum-number-of-balloons/description/

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0

 */

const WORD = "ballon";

const maxNumberOfBallons = (text) => {
  // first a function to return Hash to keep count of leter occurrence

  // another way to write the same above function to build the hash counter

  const charCounter = (str) => {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
      if (!charCount[str[i]]) {
        charCount[str[i]] = 1;
      } else {
        charCount[str[i]] = 1 + charCount[str[i]];
      }
    }
    return charCount;
  };

  let minFreq = 9999;
  let wordHash = charCounter(WORD);
  let textHash = charCounter(text);

  Object.keys(wordHash).forEach((key) => {
    if (!textHash[key]) {
      minFreq = 0;
      return minFreq;
    }

    let freq = parseInt(textHash[key] / wordHash[key]);
    if (freq < minFreq) minFreq = freq;
  });
  return minFreq;
};

console.log(maxNumberOfBallons("leetcode"));
console.log(maxNumberOfBallons("loonbalxballpoon")); // 2
