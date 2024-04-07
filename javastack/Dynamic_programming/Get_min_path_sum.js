function get_minimum_path_sum(triangle) {
    // Write your code here.
    let table = []; // to store results
    let n = triangle.length - 1; 
    for (let i = 0; i < triangle[n].length; i++){ // this for loop iterates over bottom values ready to be calculated
        table[i] = triangle[n][i];
    }
    for (let i = triangle.length - 2; i >= 0; i--){// starting at second to last
        for (let j = 0; j < triangle[i].length; j++){
            table[j] = triangle[i][j] + Math.min(table[j], table[j+1]);
        }
    }
    return table[0];
}