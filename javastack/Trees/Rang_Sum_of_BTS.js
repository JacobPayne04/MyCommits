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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  
    function findSum(root, low, high){
        
        let sum=0
        if(root){
          
            sum+=findSum(root.left,low,high,sum)
            sum+=findSum(root.right,low,high,sum)

            if(root.val>=low && root.val<=high) return sum+root.val

        }
        return sum
    }
    
   
    return findSum(root, low, high)
};