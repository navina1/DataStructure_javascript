//Apply binarysearch to find partitioning index
//split the array from partioning index
//Apply binary search in either left array or right array

function findPartitioningIndex(arr, l, r) {
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid+1] <arr.length-1) {
            return mid;
        }
        if (arr[mid] < arr[l]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}
function binarySearch(arr, l, r, x) {
    while (l <= r) {
        let mid = Math.floor((r + l) / 2);
        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] < x) {
            l = mid + 1;
        }
        if (arr[mid] > x) {
            r = mid - 1;
        }
    }
    return -1;
}
function searchSortedRotatedArray(arr, x) {
    let pi = findPartitioningIndex(arr, 0, arr.length);
    if (pi == -1) {
        return binarySearch(arr, 0, arr.length, x);
    }
    //0-pi ----Array2
    //pi+1 -- n------Array1
    if (x == arr[pi]) {
        return pi;
    }
    if (x < arr[0]) {
        return binarySearch(arr, pi + 1, arr.length, x);
    }
    if (x > arr[0]) {
        return binarySearch(arr, 0, pi, x);
    }
    return -1;
}
console.log(searchSortedRotatedArray([7,8,9,1,2,3,4,5,6],1))