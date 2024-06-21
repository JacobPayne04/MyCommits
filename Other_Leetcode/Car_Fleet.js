/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {

    const n = position.length//number of cars given
    const inds = [];//array to store indicises of cars for calculation
    for(let i = 0; i < n;i++ ){
        inds.push(i)
    }
    

    inds.sort((a,b)=>position[b]-position[a])//sort incies based on car position in decending order
    let cur = inds[0]          //since we are in decending order the biggest is first so =>
                               // inds[0] is biggest number in the array now
    let result = 1 // at least 1 cart fleet will return if every either catcehs up or there is only 1 car in array

    for(let i = 1;i < n;i++){// we start at 1 bc its the car in front of the current one to later compare
        let idx = inds[i] // idx is current index in the inds array of cars so when we have position[idx]
                          // its the indx we are at but in the position array so its referenced
                          //if the target - the current iteration * the current index cars speed is greather then the 
        if((target - position[idx]) * speed[cur] > (target - position[cur]) * speed[idx]){ 
            result ++   // e.g (12 - 8) * 2 > (12 - 10) * 4
            cur = idx   //      4 * 2 > 2 * 4              
        }               //      8 > 8 (false)
    }
return result 
};Car Fleet