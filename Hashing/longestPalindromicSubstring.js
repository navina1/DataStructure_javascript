function expandfromCenter(str, left, right) {
    let i = 0;
    while (str[left - i] && str[left - i] == str[right + i]) {
        i++;
    }
    i--;
    return str.slice(left - i, right + i + 1);
}
function longestPalindromicSubstring(s) {
    // TODO: Implement your code here
    let longest = "";
    if (s.length == 1) {
        return s;
    }
    for (let i = 0; i < s.length - 1; ++i) { 
        let oddPalindrome = expandfromCenter(s,i,i);
        let evenPalindrome = expandfromCenter(s, i - 1, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
}
console.log(longestPalindromicSubstring("a"));