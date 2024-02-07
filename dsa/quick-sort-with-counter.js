let counterOuter = 0;
let counterInner = 0;

function quickSort(arr) {
  counterOuter++;
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];
  let rightArr = [];
  let leftArr = [];

  for (let i = 1; i < arr.length; i++) {
    counterInner++;

    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }

  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myArr = [];

for (var i = 0; i < 10; i++) {
  myArr.push(getRandomInt(1, 20));
}

console.log("Unsorted array: ");
console.log(myArr);

myArr = quickSort(myArr, 0, myArr.length - 1);
console.log("Sorted array: ");
console.log(myArr);
console.log(quickSort(myArr.slice()));

console.log("outer: ", counterOuter, "inner: ", counterInner);
