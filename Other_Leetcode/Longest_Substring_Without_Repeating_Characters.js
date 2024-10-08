var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])// adding to a set but deleting the set if we see reapeting chararcter
            left++;
        }
        set.add(s[i]);// adding if its not in our set
        maxSize = Math.max(maxSize, i - left + 1)//max size of the of the array updating each time//
    }
    return maxSize;
}






//second solution
var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let maxCount = 0
    let i = 0
    let j = 0
    
    while(j < s.length){
        if(!set.has(s[j])){
            set.add(s[j])
            j++
            maxCount = Math.max(maxCount,set.size)
        }  else {
            set.delete(s[i])
            i++
        }
    }
    return maxCount
    };
    
    
    
    
    
    
    
    