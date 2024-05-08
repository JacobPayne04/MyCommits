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
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(root === null) // return true if empty []
        return true;

    if(root.val <= min || root.val >= max)
        return false; // if this breaks return false not bts

    return isValidBST(root.right, root.val, max) && isValidBST(root.left, min, root.val) //returns true if it goes all the way throuh
};


//left nodes must be less then root
//right nodes must be more then root 

