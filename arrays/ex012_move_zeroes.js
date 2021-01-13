/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

EXAMPLE
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

NOTE
1) You must do this in-place without making a copy of the array.
2) Minimize the total number of operations.

*/

const moveZeroes = function(nums) {
  addZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--
      addZero++;
    }
  }
  
  for (let i = 0; i < addZero; i++) {
    nums.push(0);
  }

  return nums;
};

console.log(moveZeroes([0,1,0,3,12,2,0,6,0]));