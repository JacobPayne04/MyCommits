/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
        for(let i = 0; i < grid.length;i++ ){
            for(let j = 0; j < grid[i].length;j++){
                if(grid[i][j] == 1){
                max = Math.max(max, dfs(grid,i,j))
            }
        }
    }
    return max;
};

var dfs = function(grid,i,j){

        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0 ){
            return 0;
        }
        grid[i][j] =  0;
        count = 1;
        count += dfs(grid,i+1,j);
        count += dfs(grid,i-1,j);
        count += dfs(grid,i,j+1);
        count += dfs(grid,i,j-1)
        return count;
        
    };