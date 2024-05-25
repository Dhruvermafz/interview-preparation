// function findMaxCharAlphabetically(str) {
//   // Step 1: Clean the string
//   let cleanStr = str.replace(/[^a-zA-Z]/g, "").toUpperCase();

//   // Step 2: Create an object to count occurrences of each character
//   let charCount = {};

//   // Step 3: Count the occurrences of each character
//   for (let char of cleanStr) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   // Step 4: Determine the character with the maximum count
//   let maxChar = "";
//   let maxCount = 0;

//   for (let char in charCount) {
//     if (
//       charCount[char] > maxCount ||
//       (charCount[char] === maxCount && char < maxChar)
//     ) {
//       maxChar = char;
//       maxCount = charCount[char];
//     }
//   }

//   return maxChar;
// }

// let str = "WE SHALL OVERCOME";
// let result = findMaxCharAlphabetically(str);
// console.log(`The character with the maximum count is: ${result}`);

