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
function isBalanced(root) {
    let balanced = true;

    function dfs(node) {
        if (!node) return 0; // Base case: the height of an empty tree is 0

        // Recursively get the heights of left and right subtrees
        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // Check if the current subtree is balanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            balanced = false;  // Set the balanced flag to false if the subtree is not balanced
        }

        // Return the height of the current subtree
        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root); // Start DFS from the root
    return balanced; // Return the final result of the balanced check
}