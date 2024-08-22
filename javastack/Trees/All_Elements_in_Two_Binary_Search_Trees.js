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
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    
    let arr1 = []
    let arr2 = []
    let merged = []
    
    function dfs(node,arr){
        if(node == null) return;
    
    
        dfs(node.left,arr)
        arr.push(node.val)
        dfs(node.right,arr)
    
    }
    
    dfs(root1,arr1)
    dfs(root2,arr2)
    
    
    
    merged = [...arr1,...arr2]
    
    
    
    merged.sort((a,b) => a-b)
    console.log(merged)
    return merged
    };