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
 * @return {number}
 */
var minDepth = function (root) {
    if(root == null) return 0   //if tree is empty the min depth is 0
       if(root.left == null ) return minDepth(root.right) + 1 //if left subtree is empty then cal funtion and look right adn add 1 
         if(root.right == null ) return minDepth(root.left) + 1          //if right subtree is empty look left and add 1                                          
                                                        
         return Math.min(minDepth(root.left),minDepth(root.right)) + 1    // out of both vlaue retunr the smallest and account for node curerntly on 
    };
    
    