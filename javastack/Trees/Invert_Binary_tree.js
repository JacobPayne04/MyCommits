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
var invertTree = function(root) {
    
    //make a traversal to store nodes and then traverse and store nodes
    //make the root the root then next one is left and next one is right adn so on 
    let res = [];


    function dfs(node){
        if(node == null) return;

        dfs(node.left)
        dfs(node.right)
        res.push(node.val)
    }
   dfs(root)
   
   return res;
};



root = [4,2,7,1,3,6,9]


//second
var invertTree = function(root){
    if(root == null) return root
   
    invertTree(root.left)//go all the way left
    invertTree(root.right)//all the way right
   
  //count depth + 1 for root
   let cur = root.left
   root.left = root.right
   root.right = cur
   return root//swapping
   };