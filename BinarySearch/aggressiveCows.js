function isvalid(m, stall, k) {
    //console.log(stall)
    let currentPosition = stall[0];
    for (let i = 1; i < stall.length; i++){
        if ((stall[i] - currentPosition) >= m) {
            k--;
            currentPosition = stall[i];
        }
        if (k == 1) {
            return true;
        }
    }
    return false;
}
function helper(stall, k, l, r) {
    let result = -1;
    while (l <= r) {
        let m = Math.floor((r + l) / 2);
        //console.log("mid",m)
        if (isvalid(m,stall,k)) {
            result = m;
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return result;
}
function aggressiveCows(stall, k, n) {
    stall.sort((a,b)=>a-b);
    let maxDistance = stall[k - 1] - stall[0];
    let minDistance = stall[0];
    //console.log(minDistance,maxDistance)
    return helper(stall, n, minDistance, maxDistance);
}
console.log(aggressiveCows([10,1,2,7,5],5,3))