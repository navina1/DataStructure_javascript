function fourSum(arr,target) {
    let sortedArray = arr.sort((a, b) => a - b);
    let resultSet = new Set();
    for (let i = 0; i < arr.length-3; i++){
        // if (i != 0 && arr[i] == arr[i - 1]) {
        //     continue;
        // }
        for (let j = i + 1; j < arr.length - 2;j++){
            // if (j != i + 1 && arr[j] !== arr[j - 1]) {
            //     continue;
            // }
            let left = j + 1;
            let right = arr.length - 1;
            while (left < right) {
                let sum = arr[i] + arr[j] + arr[left] + arr[right];
                if (sum < target) {
                    left++
                } else if (sum > target) {
                    right--;
                } else {
                    resultSet.add([arr[i], arr[j], arr[left], arr[right]].toString());
                    left++;
                    right--;
                }
            }
        }
    }
    return Array.from(resultSet).map(triplet => triplet.split(',').map(Number));
}
console.log(fourSum([-1,-2,0,1,2,3,-3,3,2,4,3],0))