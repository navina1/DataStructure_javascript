function reverse(arr) {
    let l = arr.length - 1;
    let r = 0;
    while (r < l) {
        [arr[r], arr[l]] = [arr[l], arr[r]];
        r++;
        l--;
    }
    return arr;
}
console.log(reverse([1, 2, 3, 4, 5]));