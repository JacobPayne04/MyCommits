/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {  
    let res = [];   
    for(let i = 0; i < nums.length;i++){
        
        let num = Math.pow(nums[i], 2);
        res.push(num)
    }
    return res.sort((a,b) => a - b );
};