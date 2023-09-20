function subArray(arr, start, end) {
    let res = [];
    for (i = start; i <= end; i++){
        res.push(arr[i]);
    }
    return res;
}

function allSubArray(arr) {
    n = arr.length;
    let j = n;
    let i = 0;
    for (let i = 0; i < j; i++){
        for (j = i; j < n; j++){
            console.log(subArray(arr, i, j));
        }
    }
}

allSubArray([1, 2, 3, 4]);