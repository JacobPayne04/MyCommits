/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */

var minProcessingTime = function(processorTime, tasks) {
    
    tasks.sort((a,b) => b-a);
    processorTime.sort((a,b)=> a-b)
 
    let maxSum = 0;
     let j = 0
   
    for(let i = 0; i < processorTime.length;i++){
 
        let tempSum = processorTime[i]+ tasks[j]
        maxSum = Math.max(maxSum,tempSum)
        j = j+4      
    }
    
    return maxSum
    
};
