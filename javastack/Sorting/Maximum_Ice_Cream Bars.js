/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    
    let sortedCosts = costs.sort((a,b)=>a-b)
     let sum = 0;
     
 
     for( let i = 0; i < sortedCosts.length;i++){
 
         if(sortedCosts[i] > coins){
             continue
         }
 
         if(coins > 0){
             coins -= sortedCosts[i]
             sum += 1
         } else{
             break
         }
     }
 return sum
 };