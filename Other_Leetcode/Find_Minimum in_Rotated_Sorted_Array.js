/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    

    let left = 0;
    let right = nums.length-1
   
    while(left < right){
       const mid = Math.floor(left + (right - left) / 2);
   
       if(nums[mid] < nums[right]){
           right = mid;
       } else {
           left = mid + 1;
       }
    }
   
   return nums[left]
   
   };

   // second solution 
   var findMin = function(nums) {
    //instantiat left and right and then when they have crossed con
    
    let left = 0
    let right = nums.length-1
  
    
    while(left < right){
       let mid = Math.floor((left+right)/2);
        
        if(nums[mid] < nums[right]){
            right = mid
        
           } else {
            left = mid + 1
           }
          
    }

return nums[left]
};
