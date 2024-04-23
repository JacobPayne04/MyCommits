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
var evaluateTree = function(root) {

    function dfs(node){

        if(node === null){
            return false
        }

        if(node.left === null && node.right === null){
           if(node.val == 1){
            return true
           }
           else{
            return false
           } 
        }

        let left = dfs(node.left)
        let right = dfs(node.right)

        if(node.val === 2){
            return left || right
        }
        else{
            return left && right
        }
    }

    return dfs(root)
};

// 0value = false
//1 value = true
//2 value = or
// 3 value = and
//no children at all = leaf node
//bts = having 2 chidlren or 0