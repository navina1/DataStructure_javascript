function performFloodFillSubFunction(grid, sr, sc, newColor,initColor) {
    if (sr < 0 || sr >= grid.length || sc < 0 || sc >= grid[0].length || grid[sr][sc] != initColor) {
        return
    }
    grid[sr][sc] = newColor;
    performFloodFillSubFunction(grid, sr+1, sc, newColor, initColor);
    performFloodFillSubFunction(grid, sr-1, sc, newColor, initColor);
    performFloodFillSubFunction(grid, sr, sc+1, newColor, initColor);
    performFloodFillSubFunction(grid, sr, sc-1, newColor, initColor);
}
function performFloodFill(grid, sr, sc, newColor) { 
    // TODO: Implement the performFloodFill function
    if (grid == null || grid.length < 1 || grid[sr][sc] == newColor) {
        return grid
    }
    const initColor = grid[sr][sc];
    performFloodFillSubFunction(grid, sr, sc, newColor, initColor);
    return grid;
}
console.log(performFloodFill([[1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
    ],
    1 ,1,
    2))