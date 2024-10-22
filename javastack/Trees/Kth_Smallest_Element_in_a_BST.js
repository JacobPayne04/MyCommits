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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let res = [];
    function dfs(node){

     if(node == null) return null;

     if(node){
        res.push(node.val)
        dfs(node.left)
     }
      dfs(node.right)
    }
    dfs(root)
    res.sort((a,b)=>a-b)
return res[k-1];
};

//second solution
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
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let stack = []
  let cur = root

  while(stack.length > 0 || cur !== null){
    while(cur !== null){
        stack.push(cur)
        cur = cur.left
    }
    cur = stack.pop()
    k--
    if(k === 0){
        return cur.val
    }
    cur = cur.right

  }
};  