//find leftmost x and rightmost x , and difference of that.
function leftmostX(arr, left, right, key) {
    let result = -1;
    while (left <= right) {
        let midpoint = Math.floor((right + left) / 2);
        if (arr[midpoint] == key) {
            result = midpoint;
            right = midpoint - 1;
        }
        if (arr[midpoint] > key) {
            right = midpoint - 1;
        }
        if (arr[midpoint] < key) {
            left = midpoint + 1;
        }
    }
    return result;
}
function rightMostX(arr, left, right, key) {
    let result = -1;
    while (left <= right) {
        let midpoint = Math.floor((right + left) / 2);
        if (arr[midpoint] == key) {
            result = midpoint;
            left = midpoint + 1;
        }
        if (arr[midpoint] > key) {
            right = midpoint - 1;
        }
        if (arr[midpoint] < key) {
            left = midpoint - 1;
        }
    }
    return result;
}
function freequencyOfX(arr, key) {
    let leftIndex = leftmostX(arr, 0, arr.length, key);
    let rightIndex = rightMostX(arr, 0, arr.length, key);
    return rightIndex - leftIndex + 1;
}
console.log(freequencyOfX([1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7], 5));