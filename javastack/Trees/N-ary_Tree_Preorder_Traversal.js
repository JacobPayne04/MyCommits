/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let results = [];
    dfs(root,results)
 function dfs(node,results){
 
     if(node === null) return null;
 
      results.push(node.val)
 
     for(child of node.children){
         dfs(child,results)
     }
      
 }
 
 
 return results
 
 };