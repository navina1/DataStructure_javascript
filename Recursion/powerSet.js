function powerSetRecursive(nums, depth=0, subset=[], result=[]) {
    if (depth == nums.length) {
        result.push(subset);
    } else {
        powerSetRecursive(nums, depth + 1, subset, result);
        powerSetRecursive(nums,depth+1,[...subset,nums[depth]],result)
    }
    return result
}
console.log(powerSetRecursive(["a","b","c"]))