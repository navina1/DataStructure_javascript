function longestSubarrayWithEqualVowelsAndConsonants(chars) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const countMap = new Map();
    let maxLen = 0;
    let count = 0;
    countMap.set(0, -1);

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i].toLowerCase();

        if (vowels.includes(char)) {
            count++;
        } else {
            count--;
        }

        if (countMap.has(count)) {
            maxLen = Math.max(maxLen, i - countMap.get(count));
        } else {
            countMap.set(count, i);
        }
    }

    return maxLen;
}

console.log(longestSubarrayWithEqualVowelsAndConsonants("abcdeiouiop"));
