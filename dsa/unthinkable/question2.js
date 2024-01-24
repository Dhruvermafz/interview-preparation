/** Count the MegaPrimes numbers b/w the given range  */

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return false;
}

function isMegPrime(num) {
  if (!isPrime(num)) return false;

  let numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
  }
  return true;
}

function countMegaPrimesInRange(start, end) {
  let count = 0;

  for (let num = start; num <= end; num++) {
    if (isMegPrime(num)) {
      count++;
      console.log(num);
    }
  }
  return count;
}

const startRange = 10;
const endRange = 1000;
const MegaPrimeCount = countMegaPrimesInRange(startRange, endRange);
console.log(
  `Count of MegaPrimes nums b/w ${startRange} and ${endRange}: ${MegaPrimeCount}`
);
