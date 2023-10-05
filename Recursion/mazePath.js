function mazePathRecursive(row, col, numRows, numCols, currentPath, result) {
    //TODO: Implement the mazePathRecursive function 
    if (row == numRows - 1 && col == numCols - 1) {
        const pathString=currentPath.join("")
        result.push(pathString);
        return
    }
    if (row < numRows) {
        currentPath.push("D");
        mazePathRecursive(row + 1, col, numRows,numCols, currentPath, result);
        currentPath.pop();
    }
    if (col < numCols) {
        currentPath.push("R");
        mazePathRecursive(row, col + 1, numRows, numCols, currentPath, result);
        currentPath.pop();
    }
 }
 
 function mazePathMain(numRows, numCols) {
     //TODO: Implement the mazePathMain funtion
     let currentPath = [];
     let result = [];
     mazePathRecursive(0, 0, numRows, numCols, currentPath, result)
     return result
}
const numRows = 3;
const numCols = 3;

const possiblePaths = mazePathMain(numRows, numCols);
console.log(possiblePaths);