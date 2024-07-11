/**
 * @param {number[]} nums
 * @return {boolean}
 */

var predictTheWinner = function(nums) {
    const helper = (left, right) => {
        // Base case: if there's only one number, the player takes it
        if (left === right) {
            return nums[left];
        }
        
        // Choose the leftmost number and the opponent plays optimally
        const chooseLeft = nums[left] - helper(left + 1, right);
        // Choose the rightmost number and the opponent plays optimally
        const chooseRight = nums[right] - helper(left, right - 1);
        
        // Return the maximum score difference the current player can achieve
        return Math.max(chooseLeft, chooseRight);
    };

    // The first player starts playing from the full range of the array
    return helper(0, nums.length - 1) >= 0;
};