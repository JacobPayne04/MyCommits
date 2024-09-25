/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {


    const queue = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        queue.enqueue(nums[i])

        if (queue.size() > k) {
            queue.dequeue()
        }
    }
    return queue.front().element
};

 