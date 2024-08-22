/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    
    let Apples = apple.reduce((accumulater, currentValue) => {
        return accumulater + currentValue
    }, 0)

    let boxCount = 0
    let sum = 0

    capacity.sort((a,b) => b-a)
    for(let i = 0; i < capacity.length; i++){

        if(sum < Apples){
            sum += capacity[i]
            boxCount += 1
        }
    }

    return boxCount

    
};