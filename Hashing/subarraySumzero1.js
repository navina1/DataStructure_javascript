//find if there exists a subarray (contiguous elements) whose sum equals zero.
// Return true if such a subarray exists, otherwise return false.

function hasSubarrayWithZeroSum(arr) {
    const set = new Set();
    let prefixSum = 0;
    for (let i = 0; i < arr.length; ++i) { 
        prefixSum = prefixSum + arr[i];
        if (prefixSum==0 || set.has(prefixSum)) {
            return true
        } else {
            set.add(prefixSum);
        }
    }
    return false
}
console.log(hasSubarrayWithZeroSum([4, 2, -3, 1, 6]));