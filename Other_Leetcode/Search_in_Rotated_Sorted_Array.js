/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) { // while left is less then or = to right
        const mid = Math.floor((left + right) / 2)// get the floor
        if (nums[mid] === target) return mid// if we find target then return it

        if (nums[left] <= nums[mid]) {// if left is less then or = mid and if mid is less then target its on the right so add to elft
            if (nums[mid] < target || target < nums[left]) {
                left = mid + 1
            } else {// but if left is less then mid and target is greaten then left its on the left so add iterate right                right = mid - 1
            }
        } else {
            if (nums[mid] > target || target > nums[right]) { // now if mid is bigger then target its on the left so iterate right
                right = mid - 1
            } else {//but if target is greater tehn right its on the right bc its less so add to left
                left = mid + 1
            }
        }

    }

    return - 1
};//if we dont find target retrn -1



