function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false; // Step 1: If lengths are different, not anagrams
    }

    const sortedS = s.split('').sort(); // Step 1: Sort string s as an array
    const sortedT = t.split('').sort(); // Sort string t as an array
    console.log(sortedS, sortedT);
    // Step 2: Compare sorted arrays
    for (let i = 0; i < sortedS.length; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return false; // If characters at any position differ, not anagrams
        }
    }

    return true; // If all checks pass, strings are anagrams
}

// Example usage:
const s = "cat";
const t = "tac";
console.log(isAnagram(s, t)); // Output: true
