/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let num of matrix){
        for( let j = 0; j < num.length;j++){
            if(num[j] == target){
                return true
            } 
        }  
    }
      return false
};