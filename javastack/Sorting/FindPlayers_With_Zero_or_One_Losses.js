/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

var findWinners = function(matches) {
    
    let map = new Map();
    let wins = [];
    let losses = [];
    let res = [];
    
    for(let player of matches){
         
        if(map.has(player[0])){
  
            map.set(player[0], map.get(player[0]) + 0);  
            
        }else{
            map.set(player[0], 0); 
        }
        
        
        if(map.has(player[1])){
            
             map.set(player[1], map.get(player[1]) + 1);
            
        } else {
            map.set(player[1], 1);
        }
        
        
    }
    
    
    for(let [player, loss] of map){
          if(loss == 0){
              wins.push(player)

          } else if(loss == 1){
                    losses.push(player)
          }
            
        
    
    }
    
    wins.sort((a,b) => a-b)
    losses.sort((a,b) => a-b)
    res.push(wins)
    res.push(losses)

    return res
    
  
}
