let arr = [1, 2, 3, 5];
let x = 6;
let pos = 3;

function insert(arr, x, pos) {
    let n = arr.length;
    arr[n] = 0;
   
    for (let i = arr.length-1; i > pos; i--){
        arr[i]=arr[i-1]
    }
    arr[pos] = x;
    return arr;
}

console.log(insert(arr, x, pos));