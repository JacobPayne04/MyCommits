/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let stack = [root];
    let res = []
    while(stack.length){
      const curr = stack.pop();
      if(!curr) continue;
      res.push(curr.val);
      stack.push(...curr.children);
  
    }
return res.reverse();
  
}


