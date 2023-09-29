function findLongestConsecutiveSubsequence(arr) {
    // TODO: Implement your code here
    let set = new Set(arr);
    let tempCount = 1;
    let longestCount = 1;
    let starters = [];
    for (const key of set.keys()){
        if (!set.has(key-1)) {
            starters.push(key)
        }
    }
    //console.log(key)
    //Now starters have all starters
    for (let starter of starters) {
        let breaker = true;
        while (breaker) {
            if (set.has(starter + 1)) {
                tempCount++;
                longestCount = Math.max(tempCount, longestCount);
                starter = starter + 1;
            } else {
                tempCount = 1;
                breaker = false;
            }
        }
    }
    return longestCount;
}
console.log(findLongestConsecutiveSubsequence([100, 4, 200, 1, 3, 2,5,99,6,7,344]));