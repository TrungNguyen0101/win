var searchInsert = function (nums, target) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    else if (target >= nums[i]) {
      index += 1;
    }
  }
  return index;
};
console.log(searchInsert([1, 3, 5, 6], 0));
