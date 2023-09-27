//Given an array of integers and a target difference, your task is to find pairs of distinct elements in the array such that
//the absolute difference between the two elements is equal to the given target difference.
//Return an array containing these pairs of elements.
function findDifferencePairs(arr, targetDifference) {
    let result = [];
    let differencePair = new Set();
    
    for (let i = 0; i < arr.length; ++i) {
        let number1 = Math.abs(targetDifference + arr[i]);
        let number2 = Math.abs(targetDifference - arr[i]);
        //console.log(number);
        if (differencePair.has(number1)) {
            result.push([number1, arr[i]]);
        }
        if (differencePair.has(number2)) {
            result.push([number2, arr[i]]);
        }
        differencePair.add(arr[i]);
    }
    
    return result;
}

const arr = [1, 5, 3, 4, 2];
const targetDifference = 2;
const differencePairs = findDifferencePairs(arr, targetDifference);
console.log(differencePairs);
