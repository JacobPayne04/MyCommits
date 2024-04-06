
/**
 * @param {int32} target
 * @param {list_int32} numbers
 * @return {int32}
 */
function count_triplets(target, numbers) {
    
  numbers.sort((a,b) => a-b);

  let count = 0 ;
        
for(let i = 0; i < numbers.length-2;i++){
    
    let first = numbers[i];
    
    let l = numbers.length-1;
    let j = i+1;
    
    while(j < l){
    let sum = first + numbers[j] + numbers[l];
    
    if(sum < target) {
        count+= l - j;
        j++;
    } else {
        l--;
    }   
  }

}

return count;
}