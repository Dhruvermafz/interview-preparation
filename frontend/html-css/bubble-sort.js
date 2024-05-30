// given an array of intergers sort the array
// const arr = [-6, 20, 8, -2, 4]

// compare adjacent elements in the array and swap the positions of they are not in the intended order . repeat the instructino as you step through each element in the array . once you step through the whole array with no swaps the array is sorted

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [9, 20, -1, 8, 34];
bubbleSort(arr);
console.log(arr);
