const binarySearch = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < 0) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

const countNegatives = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    const index = binarySearch(grid[i]);
    count += grid[i].length - index;
  }
  return count;
};
