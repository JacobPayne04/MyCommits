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
 * @return {number[]}
 */
function Inorder (root, res) {
    if(root==null) return;
    
    Inorder(root.left, res);

    let num = root.val;
    res.push(num);

    Inorder(root.right, res);
};
var inorderTraversal = function(root) {
    let res = [];
    Inorder(root, res);
    return res;
};

