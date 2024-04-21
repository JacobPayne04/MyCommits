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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    

    function dfs(node,value){
    if(node === null) return null ;

    if(node.val == value){
      return node
    } else{
    if(node.val > value){
        return dfs(node.left,value)
        }
        else{
            return dfs(node.right,value)
        }    
    }

    }
return dfs(root,val)
};