/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let max = 0;
    
    for (let i = 0; i <= heights.length; i++) { // goging through heights and if i < = the length of heights
         let height = i === heights.length ? 0 : heights[i];// height i is a the end of heights its =0 if not its = to where we are in heights
        
        while (stack.length > 0 && height < heights[stack[stack.length - 1]]){//while stakc is not empty and height is less then the top of the stack
            let h = heights[stack.pop()];//h = heights pop from stack
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;// width = i if the length is 0 and if its not its i minus top of stack - 1
            max = Math.max(max, h * width); //update max with h * width
        }
        
        stack.push(i);//else 
    }

    
    return max;
};
