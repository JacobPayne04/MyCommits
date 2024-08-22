/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  
    let good = 0    // have a count for good 
     
     
    
     for(let left = 0; left < s.length-2;left++){    // for loop over s from left to s-2
         
        
         const window = [s[left],s[left+1],s[left+2]] // make window = [s[left],left+1,left+2]
      
         const chars = new Set(window)  // make chars a new set of window
     
        
         if(chars.size === 3){// if size of chart is 3 
             good++  // then add to good
         }
         
     }
     
     
     return good  // return count for good
 };
 