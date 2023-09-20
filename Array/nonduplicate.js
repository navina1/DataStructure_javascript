function findNonDuplicateElement(arr) {
    let i = 0;
    let n = arr.length;

    for (i = 0; i < n; i++) {
        let flag = true; // Assume the current element is not a duplicate
        for (let j = 0; j < n; j++) {
            if (i !== j && arr[i] === arr[j]) {
                flag = false; // The current element is a duplicate
                break; // Exit the inner loop when a duplicate is found
            }
        }
        if (flag) {
            return arr[i]; // Return the non-duplicate element
        }
    }
    return null; // Return null if there are no non-duplicate elements
}

console.log(findNonDuplicateElement([1, 1, 2, 2, 3, 4, 4])); // Output: 3
