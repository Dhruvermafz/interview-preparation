// problem - given an array of integers, sort the array
// const arr = [-6, 20,9, -2, 9]
// identify the pivot element in the array - pick first element as pivot  - pick last element as pivot - pick a random element as pivot - pick median as pivot , put everything that's smaller then the pivot into a left array and everything that's greater then the pivot into a right array, repeat the process for the individual left and right array till you have an array of length 1 which is sorteed by definition, repeatedly concatenate the left array, pivot and right array till one sorted array remains

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));
