/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat.length;
  const n = mat[0].length;
  
  // Map to store diagonals using the row - col as key
  const map = new Map();
  
  // Step 1: Collect all diagonals into the map
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          const key = i - j;
          if (!map.has(key)) {
              map.set(key, []);
          }
          map.get(key).push(mat[i][j]);
      }
  }
  
  // Step 2: Sort each diagonal
  for (let [key, diagonal] of map.entries()) {
      diagonal.sort((a, b) => a - b);
  }
  
  // Step 3: Rebuild the matrix with sorted diagonals
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          const key = i - j;
          mat[i][j] = map.get(key).shift();
      }
  }
  
  return mat;
};