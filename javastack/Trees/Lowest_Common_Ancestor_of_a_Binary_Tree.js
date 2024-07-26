/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function dfs(node) {
        if (!node) return null;

        // Check if the current node is either p or q
        if (node.val === p.val || node.val === q.val) {
            return node;
        }

        // Recursively search in the left and right subtrees
        let left = dfs(node.left);
        let right = dfs(node.right);

        // If both left and right are non-null, the current node is the LCA
        if (left && right) {
            return node;
        }

        // If either left or right is non-null, return it
        return left || right;
    }

    return dfs(root);
};