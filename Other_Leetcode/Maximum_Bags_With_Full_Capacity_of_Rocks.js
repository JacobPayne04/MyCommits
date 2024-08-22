/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    
    let max = 0
    let array = []

    for(let i = 0; i < capacity.length; i++){

        let difference = capacity[i] - rocks[i]

        array.push(difference)
    }

    let additional = additionalRocks
    array.sort((a,b) => a-b)

    for(let  i = 0; i < array.length; i++){
     
        if(additional >= array[i]){
            additional -= array[i]
            max += 1
        }else{
            break
        }
    }

    return max
};