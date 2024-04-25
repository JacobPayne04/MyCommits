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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = []; 
  
    function dfs(node){

        if(node == null) return;

        if(node != null){
            dfs(node.left)
            dfs(node.right)
            res.push(node.val)
        }
       
        return res
      
    }

     dfs(root)
     return res
};