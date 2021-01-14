/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

EXAMPLE
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

*/

const findDisappearedNumbers = function(nums) {
  let actual,i,res = [];
  
  for(i = 0; i < nums.length; i++){
      actual = Math.abs(nums[i]) - 1;
      if(nums[actual] > 0)
          nums[actual] *= -1;
  }
  
  for(i = 0; i < nums.length; i++){
      if(nums[i] > 0)
          res.push(i+1);
  }
  
  return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));