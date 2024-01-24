function insertionSort(arr) {
  //start from the second element
  for (let i = 1; i < arr.length; i++) {
    // go through the element behind it
    for (let j = i - 1; j > -1; j--) {
      // value comparison using ascending order
      if (arr[j + 1] < arr[j]) {
        //swap
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(insertionSort([6, 1, 65, 9, 12, 45]));
