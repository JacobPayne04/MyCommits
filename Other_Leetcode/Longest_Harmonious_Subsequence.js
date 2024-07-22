/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let max = 0
    let map = new Map()
    
    for(let i = 0; i < nums.length;i++){
        let count = map.get(nums[i]) || 0
        map.set(nums[i], count +1)
        
        
    }
    
    for( let [n, count] of map){
         if(map.has(n-1)){
             let curMax = count + map.get(n-1)
             max = Math.max(curMax, max)
                
            }
        
        
        
    }
    
    
    return max
    
};