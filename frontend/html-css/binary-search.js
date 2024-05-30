//probelm - given a soerted arrya of b elements and a target element t, find the index of t in the arrya . return -1 if the taget element is not found

// arr  = [-5, 2, 4, 6, 10] t = 10

// if the array is empty return 01 as the element cannot be found. if the arry has elements find the middle element in the array if taget is aqual to the middle element return the middle element index, if target is less then the middle element binary search left half of the array. if target is greater then middle element, binary search right half of the array

function binarySearch(arr, N) {
  let leftId = 0;
  let rightId = arr.length - 1;

  while (leftId <= rightId) {
    let middleId = Math.max(leftId + rightId) / 2;
    if (N === arr[middleId]) {
      return middleId;
    }

    if (N < arr[middleId]) {
      rightId = middleId - 1;
    } else {
      leftId = middleId + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 10, 4, 6], 10));
