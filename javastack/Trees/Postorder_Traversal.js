
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
function postorder(root) {
    const results = []
    
    function helper(node) {
        if (!node.left && !node.right) {
            // is a leaf node
            results.push(node.value);
            return;
        }
        
        if (node.left) {
            helper(node.left)
        }
        
        if (node.right) {
            helper(node.right)
        }
        
        results.push(node.value)
    }
    
    helper(root)
    return results;
}