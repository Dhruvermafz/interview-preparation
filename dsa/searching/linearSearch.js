// write a function to search "target" in nums if target exists, then return its index
// otherwise return -1 you must write

const linearSearch = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.length === 0) return -1;
  return result;
};

console.log(linearSearch([4, 6, 2, 1, 0, 9, 0], 0));
// time -> 0(n)
// space -> 0(1)
