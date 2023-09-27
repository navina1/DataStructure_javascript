//Write a function that takes an array of 0s and 1s as input and finds the length of the longest subarray
// that contains an equal number of 0s and 1s.

function findLongestSubarray(arr) {
    // TODO: Implement your code here
    let map = new Map();
    let count = 0;
    let maxLength = 0;
    map.set(0, -1);
    for (i = 0; i < arr.length; i++){
        if (arr[i] == 0) {
            count = count - 1;
        } else {
            count = count + 1;
        }
        if (map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count));
        } else {
            map.set(count,i)
        }
    }
    return maxLength;
}
console.log(findLongestSubarray([1,1,1,1,1,1,1,0,0,0,0]))