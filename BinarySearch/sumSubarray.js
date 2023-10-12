function isvalid(k, arr, sum) {
    //sliding window
    let windowSum = 0;
    for (let i = 0; i < k; i++){//finding the first window sum
        windowSum = windowSum + arr[i];
    }
    if (windowSum < sum) {
        return true
    }
    for (let i = k; i < arr.length; i++){
        windowSum = windowSum + arr[i] - arr[i - k];
        if (windowSum < sum) {
            return true;
        }
    }
    return false
}
function helper(arr, sum, l, r) {
    let result = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (isvalid(mid,arr,sum)) {
            result = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return result;
}
function maximiseLength(arr, sum) {
    return helper(arr, sum, 0, arr.length);
}
console.log(maximiseLength([2, 6, 4, 0, 1, 5], 11));