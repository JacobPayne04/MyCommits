/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = [] //results array

    function add(string, open, close){

        if(string.length == 2*n){
            result.push(string)
        }   //when we run out of parenthises we push to results

        if(open < n){ // if open (0) is less then n (3) recruse and add ( until open is 1 away from n
            add(string + "(", open + 1, close)
        }

        if(close < open){ // when close is less then open 0 => (2) we add closing until we have 6 
            add(string + ")", open, close + 1)
        }
    }

    add("", 0, 0)

    return result
};

