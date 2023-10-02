function abcd(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let c = arr[i] + arr[j];
            if (map.has(c)) {
                const [k, l] = map.get(c);
                if (k != i && k != j && l != i && l != j) {
                    return true
                }
            }
            map.set(c,[i,j])
        }
    }
    return false
}
console.log(abcd([1, 2, 3, 4, 5, 6]))