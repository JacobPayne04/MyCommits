const swap = (array, indexA, indexB) => {
    let temp = array[indexA]
    array[indexA] = array[indexB]
    array[indexB] = temp
}

function get_permutations(arr) {
    let results = []
    
    
    const helper = (arr, i) => {
        if(i >= arr.length) return results.push([...arr])
        
        for(let j = i; j < arr.length; j++){
            swap(arr, j, i)
            helper(arr, i + 1)
            swap(arr, j , i)
        }
        
    }
    helper(arr, 0)
    return results
}
