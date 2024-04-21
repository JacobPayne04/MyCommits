/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    target = root.val
    let sum = 0;
    
if(root === null) return
//  if next value is not nul
if(root !== null){
    sum += root.left.val
    sum += root.right.val
}

if(sum === target){
    return true
} else if(sum !== target) {
    return false
}



    




    
};

//true if node.left and node. right = root 