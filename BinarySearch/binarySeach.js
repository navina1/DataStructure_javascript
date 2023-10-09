function binarySearch(arr, left, right, key) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == key) {
            return true
        }
        if (arr[mid] < key) {
            left = mid + 1;
        }
        if(arr[mid]>key){
            right = mid - 1;
        }
    }
    return false
}
console.log(binarySearch([1, 2, 4, 6, 7, 8, 10], 0, 7, 1));