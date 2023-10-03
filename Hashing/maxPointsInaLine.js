function maxPointsOnLine(arr) {
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++){
        let map = new Map();
        for (let j = i + 1; j < arr.length; j++){
            let m = (arr[j][1] - arr[i][1]) / (arr[j][0] - arr[i][0]);
            if (map.has(m)) {
                let count = map.get(m) + 1;
                map.set(m, count);
            } else {
                map.set(m, 1);
            }
            if (map.get(m) > max) {
                max = map.get(m);
            }
        }
    }
    return max+1
}
console.log(maxPointsOnLine([[1,1],[2,2]]))