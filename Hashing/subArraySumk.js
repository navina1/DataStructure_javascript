function sumk(arr,k) {
    let map = new Map();
    let prefixSum = 0;
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++){
        prefixSum = prefixSum + arr[i];
        let c = k - prefixSum;
        if (map.has(c)) {
            maxLength = Math.max(maxLength, i - map.get(c) + 1);
        } else {
            map.set(prefixSum,i)
        }
    }
    return maxLength;
}
console.log(sumk([1, 4, 20, 3, 10, 5],33))