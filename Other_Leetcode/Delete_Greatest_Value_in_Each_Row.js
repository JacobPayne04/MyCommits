/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {

    let answer = 0
    
    
    for(let row of grid){
    
        row.sort((a,b) => b-a)//sort each rodw
    }
    
        let maxRemoved = 0; //resaet the macRemoved
    
        while(grid[0].length > 0){
            let maxRemoved = 0; // while its not empty at each row shoft the first elemenet and find the max and add
    
            for(let row of grid){
            removed = row.shift()
            maxRemoved = Math.max(maxRemoved,removed)
        }
        answer += maxRemoved
    
        }
    
        
    
    return answer 
    
    };