function threeSum(arr) {
    if (arr == null || arr.length < 3) {
        return []
    }
    let resultSet = new Set();
    let n = arr.length;
    let arrNew = arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 2; i++){
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            let sum = arrNew[i] + arrNew[left] + arrNew[right];
            if (sum == 0) {
                //resultSet.add([arrNew[i], arrNew[left], arrNew[right]]);
                resultSet.add([arrNew[i], arrNew[left], arrNew[right]].toString());
                left++;
                right--;
            } else if (sum < 0) {
                left++
            }
            else {
                right--;
            }
        }
    }
    return Array.from(resultSet).map(triplet => triplet.split(',').map(Number));
}
console.log(threeSum([-4, -1, -1, 0, 1, 2]));