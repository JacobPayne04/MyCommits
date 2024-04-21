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
 * @return {TreeNode}
 */
var increasingBST = function(root) {

  

    const visited = [];
                               //we have inorder traversal pushing them into a array
   function traverse(node) {
       if (node.left) traverse(node.left);
       visited.push(node.val);
       if (node.right) traverse(node.right);
   }
       
       traverse(root);
                                       // then we build a new tree in order that we got it in 
let newRoot = new TreeNode(visited[0]); // Create the new root node
   let current = newRoot;

   for (let i = 1; i < visited.length; i++) {
       current.right = new TreeNode(visited[i]); // Create new right child node
       current = current.right; // Move to the next node
   }

return newRoot
};

//check if null if not contioue
//starrt left going left and if not null ocntuoue
//push as i go 
//check right as well if so add if not 
//
//
//
