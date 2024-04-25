/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {

    if(root == null) return 0;

    let maximumdepth = 0;
    for(let node of root.children) {
        maximumdepth = Math.max(maximumdepth, maxDepth(node));
    }
return maximumdepth +1;
};