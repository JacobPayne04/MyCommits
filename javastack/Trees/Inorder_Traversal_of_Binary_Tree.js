
/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * @param {BinaryTreeNode_int32} root
 * @return {list_int32}
 */
function inorder(root) {
    // Write your code here.
    const results = [];
    
    function dfs(node) {
        if (!node) return;
        
        dfs(node.left);
        results.push(node.value);
        dfs(node.right);
    }
    
    dfs(root);
    return results;
}
