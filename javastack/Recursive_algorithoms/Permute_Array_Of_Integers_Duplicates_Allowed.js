
/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
function get_permutations(arr) {
    
    const result = [];// results array 
    
    function util(array, indx) {//pushes when at the end of the array 
        if(indx >= arr.length){
            result.push(arr.slice());
            return;
        }
    
        let placed = [];
    //placed array to push each number in array to temp array technically
        for(let i=indx; i< arr.length; i++){
            if(!placed.includes(arr[i])){//if its not in teh placed array yet palce it 
                placed.push(arr[i])
                swap(arr,indx,i);// swap funciton that doesnt initiat till base case array is placed and pushed intop resutls 
                util(arr,indx+1,result);// index util so when its at the end the first base case is made 
                swap(arr,indx,i);// swaps elemets at 0-1,1-2, and so on i and i +1 to gerenarte permuations
            }
        }
    }
    
    util(arr, 0)
    
    return result
}


function swap(arr, i, j) { // swapping eletemets for each others value 1,2 => 2,1
    const temp = arr[i]
    arr[i]=arr[j]
    arr[j] = temp
}