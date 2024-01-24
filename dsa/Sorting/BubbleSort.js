function bubbleSort(arr) {
  // outer pass
  for (let i = 0; i < arr.length; i++) {
    // innner passn
    for (let j = 0; j < arr.length - i - 1; j++) {
      // value comparison using ascending order
      if (arr[j + 1] < arr[j]) {
        //swapping
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 7, 1, 2, 8, 10]));
