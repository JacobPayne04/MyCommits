/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums.sort((a,b) => a-b)
    // current num = original
    let currentNum = original 
    
    //for loop over nums until i = original
         for(let i = 0; i < nums.length;i++){   
            
        //when original is found muliply by 2
             if(nums[i] == currentNum){
            // make current num = to the remainder
                 
                currentNum = currentNum * 2; 
             } else {
                  continue   
             }
    
        }
    
    return currentNum
};