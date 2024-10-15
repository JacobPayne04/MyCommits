   
   var findSecondMax = function(input,k){
  
   let count = 0
   let max = input[0]
   let curMax = input[0]
   let index = 0



   for(let i = 0; i < input.length;i++){
    if(count < k){
        console.log(curMax,max,input[i])
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
   
   //let input = [3,3,0,0,0]
   let input = [4,6,3,6,8,3,7,8]
   //let input3 = [1,3,8,3,7,8,5,8]
   let k = 2
   console.log(findSecondMax(input,k));
   