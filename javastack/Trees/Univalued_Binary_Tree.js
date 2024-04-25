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
var isUnivalTree = function(root) {

    let num = root.val;
    istrue = false;
    let stack = [];
    
     dfs(root);

  for(let i = 0; i < stack.length;i++){
    if(stack[i] == num){
        istrue = true;  
    }
    if(stack[i] != num) {
        istrue = false;
        break;
    }

  }
    function dfs(node){
        if(node == null) return;

        dfs(node.left)
        dfs(node.right)
        stack.push(node.val)
    }
  return istrue;
    

};