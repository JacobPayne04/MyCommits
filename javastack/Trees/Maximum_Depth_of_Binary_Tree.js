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
var maxDepth = function(root) {
    let ans = 0;

    function dfs(node) {
        if (node === null) return 0; // Base case: return 0 for null nodes

        // Recursive calls to left and right subtrees
        let left = dfs(node.left);
        let right = dfs(node.right);

        // Update depth based on the maximum of left and right subtrees
        ans = Math.max(ans, 1 + Math.max(left, right));

        // Return the depth of the current node
        return 1 + Math.max(left, right);
    }

    // Start the depth-first search from the root node
    dfs(root);

    // Return the maximum depth
    return ans;
};