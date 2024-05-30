/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    let graph = new Array(numCourses).fill(0).map(() => []);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    let visited = new Array(numCourses).fill(0); // => [[0][0][0]] => [[1][2][1]]


    function dfs(course) {
        if (visited[course] === 1) return true;  // Cycle detected
        if (visited[course] === 2) return false; // Already processed and no cycle
        
        // Mark as visiting
        visited[course] = 1;

        //we visit it and then if we revist means tehre is a cycle 
        
        // Visit all the neighbors
        for (let neighbor of graph[course]) {  if (dfs(neighbor)) return true;
        }
        
        // Mark as visited
        visited[course] = 2;
        return false;
    }
    
    // Check each course
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i)) return false;  // Cycle detected
    }
    
    return true;
};
//if x is y = false
//if after pushing y into map its == to x its false