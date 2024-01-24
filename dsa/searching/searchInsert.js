const searchInsert = (nums, item) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === item) return mid;
    nums[mid] > item ? (end = mid) : (start = mid + 1);
  }

  if (start === end) {
    return item <= nums[start] ? start : start + 1;
  }
};
