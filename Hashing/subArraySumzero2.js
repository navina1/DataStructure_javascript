//length of longest subarray with sum=0;
function subArraySumZero(arr) {
    let prefixSum = new Map();
    let sum = 0;
    let length = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if (prefixSum.has(sum)) {
            length = Math.max(length, i - prefixSum.get(sum));
        }
        else {
            prefixSum.set(sum,i)
        }
    }
    return length;
}
console.log(subArraySumZero([4, 2, -3, 1, 6]));