//leftmost occurance of x
//arr=[1,2,3,3,3,3,3,3,5,5,6,7]
function leftMostoccuranceOfX(arr,left,right,key){
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == key) {
            result = mid;
            right = mid - 1;
        }
        if (arr[mid] < key) {
            left = mid + 1;
        }
        if (arr[mid] > key) {
            right=mid-1
        }
    }
    return result
}
console.log(leftMostoccuranceOfX([1, 2, 3, 3, 3, 3, 3, 3, 5, 5, 6, 7], 0, 12, 3));