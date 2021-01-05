/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

EXAMPLE 1
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].


EXAMPLE 2
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]


CONSTRAINTS
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

*/

const sortedSquares = function (nums) {
  const squareNumbers = [];
  nums.forEach(num => squareNumbers.push(num * num));
  return squareNumbers.sort((a, b) => a - b);
};

console.log(sortedSquares([3, 7, 10, 5, 15]));