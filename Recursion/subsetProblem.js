function hasSubsetSumHelper(arr, target,i,sum,isEmptySet) {
    if (i == arr.length) {
        return isEmptySet==false && target==sum
    }
    return hasSubsetSumHelper(arr, target, i + 1, sum + arr[i],false) || hasSubsetSumHelper(arr, target, i + 1, sum,isEmptySet);
}
function hasSubsetSum(arr, target) {
    let isEmptySet = true;
    return hasSubsetSumHelper(arr, target, 0, 0,isEmptySet);
}
console.log(hasSubsetSum([1, 2, 3], 1));