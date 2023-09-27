function findNumberFrequency(arr) {
    let frequency = new Map();
    for (let i = 0; i < arr.length; i++){
        if (frequency.has(arr[i])) {
            frequency.set(arr[i],frequency.get(arr[i])+1)
        } else {
            frequency.set(arr[i],1)
        }
    }
    return frequency
}

const arr = [4, 2, 8, 3, 3, 4, 8, 9, 4, 2, 6, 7, 8, 6, 9];
const frequencyObj = findNumberFrequency(arr);
console.log(frequencyObj);
