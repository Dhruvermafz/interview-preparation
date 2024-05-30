// problem - given a sorted array of n elements and a target element t find the index of t in the array return -1, if the target element is not found

// arr = [-5, 2, 4, 6, 10] t = 10 should return 4

// if the array is empty return -1 as the element cannpt be found,  if the array has elements find the middle element in the array if target is equal to middle element return the middle element index, if target is less then the middle element binary search left half of the array,if target is greater then middle element , binary search right half of the arry

function recursiveBS(arr, N) {
  return search(arr, N, 0, arr.length - 1);
}

function search(arr, N, leftId, rightId) {
  if (leftId > rightId) {
    return -1;
  }

  let middleId = Math.floor((leftId + rightId) / 2);

  if (N === arr[middleId]) {
    return middleId;
  }

  if (N < arr[middleId]) {
    return search(arr, N, leftId, middleId - 1);
  } else {
    return search(arr, N, middleId + 1, rightId);
  }
}

console.log(recursiveBS([-5, 2, 4, 6, 10], 10));
