/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let answer = -1;
      
      for(let i = 0; i < nums.length;i++){
          if(nums[i] == target){
              answer = i;
          }
      } 
      return answer
  };