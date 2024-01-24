var containsDuplicate = function (nums) {
  const map = [];

  for (const num of nums) {
    //if we have see this numbe brefore return
    if (map[num]) return num;

    map[num] = true;
  }
  return false;
};

console.log(containsDuplicate([2, 7, 3, 2, 1]));
