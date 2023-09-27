function transposeMatrix(matrix) {
    let transpose = new Array(matrix[0].length); // Create an empty array for the transposed matrix
    
    for (let i = 0; i < matrix[0].length; i++) {
        transpose[i] = new Array(matrix.length); // Create a new row for each column
        
        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i]; // Transpose the elements
        }
    }
    
    return transpose;
}

console.log(transposeMatrix([[1,2,3],[4,5,6]]));
