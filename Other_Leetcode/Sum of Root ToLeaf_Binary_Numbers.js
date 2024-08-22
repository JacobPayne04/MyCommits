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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    
    let sum = 0
    
    dfs(root,"")
    return sum 
    function dfs(node,currentPath){
        if(!node){
            return
        }
    
        if(!node.left && !node.right){
            sum += parseInt(currentPath + node.val,2)
            return
        }
    
        dfs(node.left,currentPath + node.val)
        dfs(node.right,currentPath + node.val)
    
    }
        
    
    
    };