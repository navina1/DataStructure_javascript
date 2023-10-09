function printPermutations(str, prefix = '') {
    const n = str.length;
    
    // Base case: If the string is empty, print the current permutation
    if (n === 0) {
        console.log(prefix);
    } else {
        // Recursive case: Generate permutations by swapping characters
        for (let i = 0; i < n; i++) {
            const currentChar = str.charAt(i);
            const restOfString = str.slice(0, i) + str.slice(i + 1);
            printPermutations(restOfString, prefix + currentChar);
        }
    }
}

// Example usage:
printPermutations("abc");
