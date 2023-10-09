function rightMostOccurance(arr, left, right, key) {
    let result = -1;
    while (left <= right) {
        let midIndex = Math.floor((right + left) / 2);
        if (arr[midIndex] == key) {
            result = midIndex;
            left = midIndex + 1;
        }
        if (arr[midIndex] < key) {
            left = midIndex + 1;
        }
        if (arr[midIndex] > key) {
            right = midIndex - 1;
        }
    }
    return result;
}
console.log(rightMostOccurance([1,2,3,3,3,3,3,4,4,5],0,9,4))