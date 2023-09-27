function findSumPair(arr, targetSum) {
    let sumPair = new Map();
    for (let i = 0; i < arr.length; i++){
        if (sumPair.has(targetSum - arr[i])) {
            return ([sumPair.get(targetSum - arr[i]),i])
        } else {
            sumPair.set(arr[i], i);
         }
    }
    return ("No sum pair found")
}
const arr = [2, 7, 11, 15, 3];
const targetSum = 10;
const indices = findSumPair(arr, targetSum);
console.log(indices);