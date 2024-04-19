/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {   

    let numSorted = num.toString().split('').sort((a,b) => a - b).join('');
    
    let first = parseInt(numSorted[0].toString() + numSorted[2].toString())
    let second =  parseInt(numSorted[1].toString() + numSorted[3].toString())
    
    let answer = first+second;
    
    return answer
    
    
    };
    
    // will always use 2 digits, smaller digits in 10s place and larger in ones place
    //4009 => sort() => 0049 => _4 + _9 => 04 + 09 => 52
    
    