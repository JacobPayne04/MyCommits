/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    while(stones.length > 1) {
        stones.sort((a, b) => a - b);
        let x = stones.pop();
        let y = stones.pop();
        
        if(x === y) continue;
        else stones.push(Math.abs(x - y));
    }
    
    return stones;
};