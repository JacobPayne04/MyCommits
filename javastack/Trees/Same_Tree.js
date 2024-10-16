/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let res1 = [];
    let res2 = [];
 
 
     function dfs(node,res){
         if(node == null){
             res.push(null)
             return
         }
          res.push(node.val)
         dfs(node.left,res);
         dfs(node.right,res);
     }
 
     dfs(p,res1)
     dfs(q,res2)
 
     if(res1.length !== res2.length){
         return false
     }
 
     for(let i = 0; i < res1.length;i++){
         if(res1[i] !== res2[i]){
     return false;
         } 
     }
 
      
 return true
 };

 //second solution 


 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    if(!p && !p){
       return true
    }
   
    if(p && q && p.val == q.val){
       return(isSameTree(p.left,q.left) && isSameTree(p.right,q.right))
    } else {
       return false
    }
   
   };