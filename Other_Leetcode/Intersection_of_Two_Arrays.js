/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    const result = new Set();

    nums2.sort((a, b) => a - b);

    const search = (target) => {
        let left = 0;
        let right = nums2.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums2[mid] === target) {
                result.add(target);
                return;
            }

            if (target > nums2[mid]) left = mid + 1;
            else right = mid - 1;
        }

        return
    };

    for (let num of nums1) {
        search(num);
    };

    return [...result];
};