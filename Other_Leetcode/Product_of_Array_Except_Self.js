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


//second solution
var productExceptSelf = function(nums) {
    const n = nums.length;
    const output =[];

    const leftProducts =[];
    const rightProducts =[];
    leftProducts[0] = 1;
    rightProducts[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        output[i] = leftProducts[i] * rightProducts[i];
    }
    
    return output;
};