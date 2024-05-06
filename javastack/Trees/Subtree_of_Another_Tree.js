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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!subRoot) return true; // An empty tree is always a subtree of a tree
    if (!root) return false; // A subtree cannot exist if a tree is empty so therefore is false

    // Helper function to perform DFS in the main tree
    function dfs(node) {
        if (!node) return false;
        // Check if trees rooted at `node` and `subRoot` are identical
        if (isSameTree(node, subRoot)) return true;
        // Otherwise, continue searching in the left and right subtree
        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};

// Helper function to check if two trees are identical
function isSameTree(node1, node2) {
    if (!node1 && !node2) return true; // Both nodes are null and if they are its true
    if (!node1 || !node2) return false; // One node is null, the other isn't or (NOT SAME)
    // Both nodes are non-null, check their values and recurse(compares both trees current node for check)
    // In other words if node # 2 === node #2 in subtree return and recurse
    return node1.val === node2.val && isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
}