/*
Create a function that takes two arguments: an array of numbers and a target number.
 The function should find two different numbers in the array that, when added together,
give the target number. Return the indices of the two numbers in an array.

Examples
twoSum([1,2,3,4,5], 9) ➞ [3, 4]

twoSum([2,7,11,15], 9) ➞ [0, 1]

twoSum([3,2,4], 6) ➞ [1, 2]
Notes
If no such pair exists, return [-1, -1].
Assume that each input would have exactly one solution and you may not use the same element twice.
*/

function twoSum(nums, target) {
    const comp = new Map();
    for(let i=0; i<nums.length; i++) {
      if(comp[nums[i]] >= 0){ //found the pair
        return [comp[nums[i]], i];
      }
      comp[target - nums[i]] = i;
    }
    return [-1, -1];
  }
  
  exports.solution = twoSum;