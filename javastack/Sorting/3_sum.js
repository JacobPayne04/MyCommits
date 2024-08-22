/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let sorted = nums.sort((a,b) => a- b);
    let out = [];

    for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let left = i + 1;
        let right = sorted.length - 1;
        while (left < right) {
            let res = sorted[i] + sorted[left] + sorted[right];
            if (res === 0) {
                out.push([sorted[i], sorted[left], sorted[right]])
                while (left < right && sorted[left] === sorted[left + 1]) left++
                while (left < right && sorted[right] === sorted[right - 1]) right--
                left++;
                right--;
            }
            else if (res > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return out
};