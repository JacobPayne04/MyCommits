/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
   
    nums.sort((a,b) => b-a);
    
    for(let num of nums ){
        let largest = num

        if(nums.includes(- largest)){
            return largest 
        } 
    }

return -1

};

/**
sorting array in decending order
make largest variable nums[0]
see if it .includes() that number 
if it doestn and reaches the end -1 




 */