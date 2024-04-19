/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {

    nums.sort((a,b) => a -b )
    
    let number1 = nums[0] * nums[1];
    let number2 = nums[nums.length-1] * nums[nums.length-2]
    
    let answer = number2 - number1;
    
    return answer
    };