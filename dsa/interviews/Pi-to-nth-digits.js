/**
 * Find PI to the Nth Digit - Enter a number and have the program PI up to that many decimal places. Keep a limit to how far the program will go.
 * John Machin's formula pi/4 = 4 * arctan(1/5) - arctan(1/239)
 */

const findPi_to_nth_Digits = (n) => {
  if (n === undefined || n > 20) {
    n = 20;
  }

  return 16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239);
};

console.log(findPi_to_nth_Digits(20));
