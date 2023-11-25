var removeDuplicates = function (nums) {
  var newArr = [];
  for (var i = 0; i < nums.length; i++) {
    if (newArr.indexOf(nums[i]) === -1) {
      newArr.push(nums[i]);
    }
  }
  const arrLength = nums.length - newArr.length;
  const emptyArr = [];
  for (var i = 0; i < arrLength; i++) {
    emptyArr.push("_");
  }
  //   return [...newArr, ...emptyArr];
  return newArr.length;
};
// function removeDuplicates(nums) {
//   let k = 0; // index of last unique element
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k]) {
//       // found a new unique element
//       k++;
//       nums[k] = nums[i]; // replace next element with new unique element
//     }
//   }
//   return k + 1; // number of unique elements
// }
console.log(removeDuplicates([1, 1, 2]));
