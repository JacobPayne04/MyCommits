/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
   
    return nums.length < 3 ? -1 : nums.sort((a,b) => a - b)[1]
 
 
 };
 
 