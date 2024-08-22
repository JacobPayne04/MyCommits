/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    
    //sort the sub arrays 
        for(let i = 0; i < nums.length;i++){
         nums[i].sort((a,b)=> a-b)   
            
        }
      
        // sum var
        let sum = 0
              
        //look at each sub array 
        for(let i = 0; i < nums[0].length; i++){
            // max var
            let maxi = 0
            //    look at each number in the subarr
            for(let j = 0; j < nums.length;j++){
                //update the max with that sum
                maxi = Math.max(nums[j][i],maxi)
            }
            // update sum with max
            sum += maxi
        }
        
        // return sum
        return sum
    };