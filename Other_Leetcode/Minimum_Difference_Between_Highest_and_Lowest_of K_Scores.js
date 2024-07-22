/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    // Sort the scores
    nums.sort((a, b) => a - b);

    // Initialize the minimum difference to a large number
    let minDiff = Number.MAX_SAFE_INTEGER;

    // Use a sliding window of size k
    for (let i = 0; i <= nums.length - k; i++) { // Notice the change here
        let diff = nums[i + k - 1] - nums[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};