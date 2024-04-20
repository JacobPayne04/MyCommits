/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let adjList = {}, visited = [];  // for edge list and seeing if we have visited it 

    for(const edge of edges){
        adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) : //check if the edge is in the graph and if so push it if not
        adjList[edge[0]] = [edge[1]]                          //make it the next one 

        adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) : 
        adjList[edge[1]] = [edge[0]]

    } 

    const stack = [source]; // stack starts with source
    visited[source] = true // if we have visited it we then mark it true

    while(stack.length){
        const current = stack.pop(); // we make pop current so we are "backtracking"
        if(current === destination) return true; // reture true if we found the answer 
        for(let neighbour of adjList[current]) {
            if(!visited[neighbour]){
                stack.push(neighbour); // cycle check
                visited[neighbour] = true
            }
        }
    }

return false


}