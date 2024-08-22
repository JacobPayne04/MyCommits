/**
 * @param {character[][]} board
 * @return {boolean}
 */



/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // hashmap to store numbers seen in rows, columns, and 3x3 sub-boxes
    let rows = new Array(9).fill(null).map(() => new Map());
    let cols = new Array(9).fill(null).map(() => new Map());
    let boxes = new Array(9).fill(null).map(() => new Map());

    for (let r = 0; r < 9; r++) {                // loop through rows
        for (let c = 0; c < 9; c++) {            // loop through columns
            let num = board[r][c];              // get the current cell value
            
            if (num !== '.') {  // only check non-empty cells
                // Get the index of the 3x3 sub-box
                let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // Check if the number is already in the current row, column, or 3x3 sub-box
                if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
                    return false;  // If any condition is violated, the Sudoku board is invalid
                }

                // Add the number to the current row, column, and 3x3 sub-box maps
                rows[r].set(num, 1);
                cols[c].set(num, 1);
                boxes[boxIndex].set(num, 1);
            }
        }
    }

    return true;  // If none of the conditions were violated, the Sudoku board is valid
};
