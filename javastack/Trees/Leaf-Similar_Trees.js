/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    let results1 = []
    let results2 = []
    

    function dfs(node, array){

        if(node == null){
            return;
        }

        if(node.left == null && node.right == null){
            array.push(node.val)
        }
        
        dfs(node.left, array)
        dfs(node.right, array)
    }

    dfs(root1, results1)
    dfs(root2, results2)

    if (results1.length !== results2.length) {
    return false;
    }
    for (let i = 0; i < results1.length; i++) {
        if (results1[i] !== results2[i]) {
            return false;
        }
    }
    return true;
};