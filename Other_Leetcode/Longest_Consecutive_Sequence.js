/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Map();
    let longest = 0;
    let current = 0;
    let prev = 0;
    let main = 0;

    if (nums.length === 0) return 0;  // Early return for empty input

    nums.sort((a, b) => a - b);

    for (let num of nums) {
       
        if (map.size == 0) {
            map.set(num, 1);
            main = num;
        } else if (num - prev == 1) {
            let count = map.get(main);
            map.set(main, count + 1);
           
        } else if (num !== prev) {
            map.set(num, 1);
            main = num;
        }

        prev = num;
    }

    let max = 0;
    for (let count of map.values()) {
        if (count > max) {
            max = count;
        }
    }

    return max;
};