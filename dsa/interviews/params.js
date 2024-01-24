const input = [1, 2, -2, 11, 7, 1];
const output = 7;
const input1 = [1, 4, 7, 2, 4, 7];
const output1 = 4;

function secondLargest(input) {
  let arr = input.sort((a, b) => a - b);
  let res = arr[arr.length - 1];

  for(let i = input.length - 2; i>=0; i++) {
    if(res!=)
  }
}

console.log(secondLargest(input));
console.log(secondLargest(input1));
