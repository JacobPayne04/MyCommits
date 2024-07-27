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
 * @return {number}
 */
var deepestLeavesSum = function(root) {

    if(!root) return 0
   
let levelSum = 0
let queue = [root]


while(queue.length > 0){

   let levelSize = queue.length
   levelSum = 0

   for(let i = 0; i < levelSize;i++){

       let CurrentNode = queue.shift()

       levelSum += CurrentNode.val

   


   if(CurrentNode.left){
       queue.push(CurrentNode.left)
   }

    if(CurrentNode.right){
       queue.push(CurrentNode.right)
   }


   }




}

return levelSum




};