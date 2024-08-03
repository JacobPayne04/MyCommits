/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = []
    let pre = 1
    let post = 1

    for(let i = 0; i < nums.length;i++){
        result[i] = pre 
        pre *= nums[i]
    }

    for(let i = nums.length-2; i >= 0; i--){
        post *= nums[i+1]
        result[i] *= post
    }

    return result

};