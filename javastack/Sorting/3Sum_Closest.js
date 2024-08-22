/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let curMax = Number.NEGATIVE_INFINITY;
  
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              let tempMax = nums[i] + nums[j] + nums[k];
              
              if (Math.abs(target - tempMax) < Math.abs(target - curMax)) {
                  curMax = tempMax;
              }
          }
      }
  }
  
  return curMax;
};
