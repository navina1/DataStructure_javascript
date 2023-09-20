function secondLargest(arr) {
    let n = arr.length;
    let largest1 = arr[0];
    let largest2 = arr[0];
    for (let i = 0; i < n; i++){
        if (arr[i] > largest1) {
            largest2 = largest1;
            largest1=arr[i]
        } else if (arr[i] > largest2) {
            largest2 = arr[i];
        }
    }
    return largest2;
}
console.log(secondLargest([2,3,1,7,4]))