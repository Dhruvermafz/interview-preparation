// given an array of n elements and a target element t , find the index of t in the arry . return -1 if the target element is not found

// arr = [-5, 2, 10, 4, 6] t=10 should return 2

// start at the first element in the array and move towars the last, at each element though , check if the element is equal to the target element, if element found, return  the index of element, if element not found return -1

function linearSearch(arr, N) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === N) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
