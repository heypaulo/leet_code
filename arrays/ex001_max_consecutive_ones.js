/* 
Given a binary array, find the maximum number of consecutive 1s in this array.

EXAMPLE:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

*/
const findMaxConsecutiveOnes = function(nums) {
  let current = 0;
  let largest = 0;
      
  nums.forEach(num => {
    num === 0 ? current = 0 : current++;
    if (current > largest) largest = current;
  })  

  return largest;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));