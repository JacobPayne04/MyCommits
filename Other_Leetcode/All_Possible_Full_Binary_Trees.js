/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n, memo = {}) {
    // If n is not odd, return an empty array
    if (!(n % 2)) return [];

    // If n is 1, return a tree with a single node
    if (n === 1) return [new TreeNode(0)];

    // If the result for this n is already in the memo, return it
    if (memo[n]) return memo[n];

    let res = [];
    // Iterate over all possible numbers of nodes in the left subtree
    for (let i = 1; i < n; i += 2) { // start at one bc root node
        // Generate all possible full binary trees for the left and right subtrees
        const leftSub = allPossibleFBT(i, memo);
        const rightSub = allPossibleFBT(n - i - 1, memo);

        // Combine each left and right subtree to form a full binary tree
        leftSub.forEach(leftTree => {
            rightSub.forEach(rightTree => {
                res.push(new TreeNode(0, leftTree, rightTree));
            });
        });
    }

    // Memoize the result for this n
    memo[n] = res;
    return res;
};
