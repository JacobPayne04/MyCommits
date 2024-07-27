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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    
    let currentSum = 0
   
   
    function bst(node){
       if(node != null){ // if the node is not null then travers
   
           bst(node.right)//traverse rigt
   
       currentSum += node.val//anything to the right of the current node we add to cursum
       node.val = currentSum // make that val curSum
   
       
       bst(node.left)//go left
   
       return node
       }
    
    }
       return bst(root) 
    
   };
   
   
   
   