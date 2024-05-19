
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
function preorder(root) {
    if (!root) return [];

    let stack = [];
    let res = [];

    stack.push(root);

    while (stack.length) {
        let node = stack.pop();
        res.push(node.value);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return res;

}