
/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
function get_permutations(arr) {
    const results = []
    permute(arr,0,[],results)
      return [];
  }
  
  
  function permute(arr,index,slate,results) {
      if(slate.length === arr.length){
          result.push(slate.slice())
          return
      }
      
      for(let i = index; i< arr.length; i++){
          slate.push(arr[i]);
          const temp = arr[i];
          arr[i] = arr[index];
          arr[index] = temp;
          permute(arr,index+1,salte,result)
          slate.pop()
          const temp2 = arr[i]
          arr[i] = arr[index]
      }   arr[index] = temp2
      return
  }