/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let res = 0;
    const count = new Map();
    let l = 0;
// go through s and add each lestter count to each letter
    for(let r = 0; r < s.length;r++){
        let len = r - l + 1 
        count.set(s[r], 1 + (count.get(s[r]) || 0))

        if(len - Math.max(...count.values()) > k){
            count.set(s[l], count.get(s[l]) - 1)
            l++
        }
        len = r - l + 1
        res = Math.max(res,len)
    }
    return res
};