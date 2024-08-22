/**
 
@param {number[]} nums
@return {boolean}
*/
var containsDuplicate = function(nums) {
  
    let numMap = new Map()
    
    for(let i = 0; i < nums.length;i++){
        if(numMap.has(nums[i])){
         return true
        } else {
            numMap.set(nums[i])
        } 
    }
    
    
      return false
    };
    
    