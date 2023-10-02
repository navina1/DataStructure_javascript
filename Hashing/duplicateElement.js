function duplicateElement(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++){
        if (!set.has(arr[i])) {
            set.add(arr[i]);
        } else {
            return true
        }
    }
    return false
}
console.log(duplicateElement([1,2,3,4,1]))