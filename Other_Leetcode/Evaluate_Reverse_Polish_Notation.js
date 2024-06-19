/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    const stack = [];
    for(const token of tokens){
       if(token === "+"){
           stack.push(stack.pop() + stack.pop())
    
       }else if(token === "-"){
        const num1 = stack.pop();
        const num2 = stack.pop();
        stack.push(num2 - num1)
    
       }else if(token === "*"){
        stack.push(stack.pop() * stack.pop())
    
       }else if(token === "/"){
        const num1 = stack.pop();
        const num2= stack.pop();
       stack.push(Math.trunc(num2 / num1))
    
       } else {
        stack.push(parseInt(token))
       }
    }
    return stack.pop();
    
    };