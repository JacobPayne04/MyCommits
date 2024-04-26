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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    
    let res = [];
//create fucntion to traverse tree into array
    function dfs(node){
        if(node == null) return null;

        res.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }

    
//2 pointer array to get if there is a sum = to k
    dfs(root)
    res.sort((a,b)=>a-b)

    for(let i = 0; i < res.length;i++){
        for(let j = res.length-1; j > i;j--){
            if(res[i] + res[j] == k){
                return true
            }
        }
    }
return false
};