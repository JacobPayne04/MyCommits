function two_sum(numbers, target) {
    // Write your code here.
    let map1 = new Map()
    for(let i=0;i<numbers.length;i++) {
        if(map1.has(target-numbers[i])) return [i, map1.get(target-numbers[i])]
        else map1.set(numbers[i], i)
    }
    
    return [-1,-1];
}


// second solution 
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let arr = []
    let l = 0
    let r = numbers.length-1

    while(l < r){

        let sum = numbers[l] + numbers[r];

        if (sum === target) {
            arr.push(l + 1)
            arr.push(r + 1)
            return arr
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }

    return []
};