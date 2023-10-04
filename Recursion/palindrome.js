function helper(arr, l, r) {
    if (l >= r) {
        return true
    }
    return arr[l] == arr[r] && helper(arr, l + 1, r - 1);
    
}
function palindrome(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return true
    }
    let l = 0;
    let r = arr.length-1;
    return helper(arr, l, r);
}
console.log(palindrome("abab"));