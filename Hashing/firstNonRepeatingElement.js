function findFirstNonRepeating(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++){
        if (map.has(arr[i])) {
            let count = map.get(arr[i]) + 1;
            map.set(arr[i],count)
        } else {
            map.set(arr[i],1)
        }
    }
    for (const [key, value] of map) {
        if (value == 1) {
            return key
        }
    }
    return ("No elements")
}
const arr = [4, 2, 8, 3, 3, 4, 8, 9, 4, 2, 6,9,6,, 7, 8, 6, 9];
const result = findFirstNonRepeating(arr);
console.log(result);