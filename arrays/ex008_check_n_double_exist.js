/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that:
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

EXAMPLE 1
Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.


EXAMPLE 2
Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.


EXAMPLE 3
Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.


CONSTRAINTS
2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3

*/

const checkIfExist = arr =>
  !arr.length
    ? false
    : arr.slice(1).includes(arr[0] * 2) || arr.slice(1).includes(arr[0] / 2)
    ? true
    : checkIfExist(arr.slice(1));

console.log(checkIfExist([-20, 8, -6, -14, 0, -19, 14, 4]));