/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

EXAMPLE 1
Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

EXAMPLE 2
Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

*/
const duplicateZeros = function(arr) {
  const arrayLength = arr.length;
	for (let i = 0; i < arrayLength; i++) {
		if(arr[i] === 0) {
			arr.splice(i, 0 ,0)
			i++
		}
	}
  arr.splice(arrayLength, (arr.length - arrayLength))
  
  return arr;
}

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));