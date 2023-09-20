let arr = [1, 2, 3, 4];
let x = 6;
let pos = 3;

function insert(arr, x, pos) {
    let n = arr.length;
    for (let i = pos; i < n; i++){
        arr[i+1]=arr[i]
    }
    arr[pos] = x;
    return arr;
}

console.log(insert(arr, x, pos));