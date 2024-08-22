
/**
 * @param {string} expression
 * @return {number[]}
 */


var diffWaysToCompute = function(expression) {
   
    let memo = new Map()
    
    //make new function to compute
    
    function compute(expression){

        //if we have seen the expression 
        if(memo.has(expression)){
            //return the expression after getting it
           return memo.get(expression)
        }
        
        // array for sum
        let results = []
       //for loop to iterate over expressions
        for(let i = 0; i < expression.length; i++){
            // character = expression[i]
            let character = expression[i]
            // if statement to check if character is equal to - || + || *
            if(character == "+" || character == "-" || character == "*"){
                // leftChar = recursion call expression.tosubstring(0,1)
               let leftChar = compute(expression.substring(0,i))
                // right recursion call from character to i + 1(number)
               let rightChar = compute(expression.substring(i + 1))
               
  
                    //for of left number
                for(let leftNumber of leftChar){
                     // for of right number
                   for(let rightNumber of rightChar){
                         let result    // variable for sum
                        
                         //character operator check again but the operator that it is    
                        //put left number + operater from character + right number
                         if(character == "+"){
                             result = leftNumber + rightNumber   
                         }else if(character == "-"){
                             result = leftNumber - rightNumber
                         }else if(character == "*" ){
                            result = leftNumber * rightNumber
                         
                         }
                       // push the sum var into the results array
                          results.push(result)

                   }   
                   }
                }
        }             
        
                // if the array.length == 0
        if(results.length === 0){
            results.push(parseInt(expression))  
        }
                // set the expression into memo
        
        
        memo.set(expression, results)
        
        
        //return calling function with expression as a parameter
        return results
        
    }
    
    
    
    
    
   return compute(expression) 

};