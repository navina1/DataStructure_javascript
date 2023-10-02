function isValidSudoku(board) {
    // Create three hashmaps to store the numbers in each row, column, and subgrid.
    let rows = new Map();
    let columns = new Map();
    let subgrids = new Map();
  
    // Iterate over the board.
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // Get the number at the current cell.
        let number = board[row][col];
  
        // Check if the number is already in the row, column, or subgrid.
        if (rows.has(row) && rows.get(row) === number) {
          return false;
        }
        if (columns.has(col) && columns.get(col) === number) {
          return false;
        }
        let subgrid_index = (row // 3) * 3 + col // 3;
        if (subgrids.has(subgrid_index) && subgrids.get(subgrid_index) === number) {
          return false;
        }
  
        // Add the number to the row, column, and subgrid hashmaps.
        rows.set(row, number);
        columns.set(col, number);
        subgrids.set(subgrid_index, number);
      }
    }
  
    // If we reach this point, the board is valid.
    return true;
  }
  
  const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  const isValid = isValidSudoku(board);
  console.log(isValid);
  
 
  
    