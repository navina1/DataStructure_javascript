function sumOfTwoMatrices(array1, array2) {
    if (array1.length !== array2.length || array1[0].length !== array2[0].length) {
        throw new Error("Arrays must have the same dimensions");
    }

    let result = new Array(array1.length);

    for (let i = 0; i < array1.length; i++) {
        result[i] = new Array(array1[0].length);
        for (let j = 0; j < array1[0].length; j++) {
            result[i][j] = array1[i][j] + array2[i][j];
        }
    }

    return result;
}

console.log(sumOfTwoMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]));
