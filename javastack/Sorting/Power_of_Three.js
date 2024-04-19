/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return isPower(n,false)
};

function isPower(n,istrue){
     if(n == 1){
        istrue = true;
    }
    if(n < 1){
        istrue = false;
    } else if( n !== 1){
     return isPower(n / 3,istrue)
    }
    
    return istrue;
}