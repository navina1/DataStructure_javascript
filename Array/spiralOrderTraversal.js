function spiralOrderTraversal(matrix) {
    // PLACEHOLDER_JAVASCRIPT_SPIRAL_ORDER_TRAVERSAL_BODY
    let counter = 1;
    let startRow = 0;
    let endRow = matrix.length-1;
    let startColumn = 0;
    let endColumn = matrix[0].length-1;
    const result = [];
    // for (let i = 0; i <= endRow; i++){
    //     result.push([])
    // }
    while (startRow <= endRow && startColumn <= endColumn) {
        //Top
        for (let i = startColumn; i <= endColumn; i++){
            result.push(matrix[startColumn][i]);
        }
        startRow++;
        //Right
        for (let i = startRow; i <= endRow; i++){
            result.push(matrix[i][endColumn]);
        }
        endColumn--;
        //Bottom
        for (let i = endColumn; i >= startColumn; i--){
            result.push(matrix[endRow][i])
        }
        endRow--;
        //Left
        for (let i = endRow; i>=startRow; i--){
            result.push(matrix[i][startColumn])
        }
        startColumn++
    }

    // Convert each element of the list to a string.
    const stringList = result.map(element => element.toString());

    // Concatenate all of the strings together.
    const numberString = stringList.join(' ');

    return numberString;
}
console.log(spiralOrderTraversal([[1], [2], [3],[4]]));

