// given an array of integers, sort the array
//const arr = [-6, 20, 8, -2, 4]

// divide the array into sub arrays, each containing only one element [an array with one element i considered sorted], repeatedly merge the sub arrays to produce new sorted sub arrays untill there is only one sub array remaining that will be the sorted array

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftAr = arr.slice(0, mid);
  const rightAr = arr.slice(mid);

  return merge(mergeSort(leftAr), mergeSort(rightAr));
}

function merge(leftAr, rightAr) {
  const sortedArr = [];
  while (leftAr.length && rightAr.length) {
    if (leftAr[0] <= rightAr[0]) {
      sortedArr.push(leftAr.shift());
    } else {
      sortedArr.push(rightAr.shift());
    }
  }
  return [...sortedArr, ...leftAr, ...rightAr];
}

const arr = [8, 20, -2, -4, -6];

console.log(mergeSort(arr));
