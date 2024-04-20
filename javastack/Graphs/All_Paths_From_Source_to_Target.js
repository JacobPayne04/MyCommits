/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    let res = [];
    
    function backtrack(currNode,currArr){
        
    currArr.push(currNode);
    if(currNode === graph.length-1){
        res.push([...currArr]);
    }
    
    let neighbours = graph[currNode];
    
    for(let n of neighbours){
        backtrack(n, currArr)
    }
    
    currArr.pop();
    
    
    
    }
    
    
    backtrack(0,[])
    
    return res;
    };