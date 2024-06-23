/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashTable = new Map();

    // Step 1: Count frequencies
    nums.forEach(num => {
        if (hashTable.has(num)) {
            hashTable.set(num, hashTable.get(num) + 1);
        } else {
            hashTable.set(num, 1);
        }
    });

    // Step 2: Convert Map to array and sort by frequency
    let sortedArray = Array.from(hashTable.entries()).sort((a, b) => b[1] - a[1]);

    // Step 3: Extract top K frequent elements
    let results = [];
    for (let i = 0; i < k; i++) {
        results.push(sortedArray[i][0]);
    }

    return results;
};