   
   var findSecondMax = function(input,k){
  
   let count = 0
   let max = 0
   let curMax = 0
   let index = 0



   for(let i = 0; i < input.length;i++){
    if(count < k){
        
        if(curMax >= max){
            count++
            curMax = input[i]
            index = i
        } else{
            break;
        }
        
    }
            
   }
   
return index
   }
   
   let input = [3,3,0,0,0,]
   let k = 2
   console.log(findSecondMax(input,k));