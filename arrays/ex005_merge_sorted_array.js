/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

EXAMPLE 1
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

EXAMPLE 2
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

CONSTRAINTS
0 <= n, m <= 200
1 <= n + m <= 200
nums1.length == m + n
nums2.length == n
-109 <= nums1[i], nums2[i] <= 109

*/

const merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length, ...nums2);
  nums1.sort((a, b) => a - b);

  return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3));