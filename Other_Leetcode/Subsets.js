/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const subset = [];

    const createSubset = function(i) {
        if (i === nums.length) {
            res.push([...subset]);//once we reach the end put all the subsets into res
            return;//pop out of this if to return res
        }

        subset.push(nums[i]);//adding nums[i] into the subset and iterating i
        createSubset(i + 1);

        subset.pop();// after having it uncluded , exclude it and iterate i
        createSubset(i + 1);
    };

    createSubset(0);
    return res;    
};