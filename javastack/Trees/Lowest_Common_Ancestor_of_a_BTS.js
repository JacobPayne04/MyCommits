/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    function dfs(node, p, q){

        if(node == null){
            return null
        }

        if(p.val <= node.val && q.val >= node.val || p.val >= node.val && q.val <= node.val) return node

        if(p.val < node.val && q.val < node.val){
            return dfs(node.left, p, q)
        }
        
        if(p.val > node.val && q.val > node.val){
            return dfs(node.right, p, q)
        }
        
    }

    return dfs(root, p ,q)
};