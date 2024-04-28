/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let sortedHeights =  [...heights].sort((a,b) => a-b);
    let count = 0;

    for(let i = 0; i < sortedHeights.length;i++){
        if(heights[i] != sortedHeights[i]){
              count += 1;
    }

    }
return count;
};